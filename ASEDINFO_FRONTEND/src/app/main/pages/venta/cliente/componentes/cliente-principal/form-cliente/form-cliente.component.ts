import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Cliente } from 'app/main/pages/compartidos/modelos/Cliente';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/venta/cliente/componentes/detail/detail.component';
import { ClienteService } from '../../../servicios/cliente.service';
import dayjs from "dayjs";
import { MyValidators } from 'app/utils/validators';
import { Persona } from 'app/main/pages/compartidos/modelos/Persona';
import { PersonaService } from 'app/main/pages/catalogo/persona/servicios/persona.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {
  /*SPINNER*/
  public load_btn: boolean;

  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaPersona: EventEmitter<any>;

  /*INPUT RECIBEN*/
  @Input() listaPersonaChild: any;
  @Input() personaEditar: Persona;
  @Input() codigoChild: number;
  @Input() identificacionChild: string;

  /*MODALES*/
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;

  /*VARIABLES */
  public showDetail: boolean;
  private amieRegex: string;
  private currentUser: any;

  /*FORMULARIOS*/
  public formCliente: FormGroup;

  /*OBJETOS*/
  public cliente: Cliente;
  public persona: Persona;
  public listaPersonaAux: Persona[];
  public listaCliente: Cliente[];
  public listaRespuesta = [
    { valor: "SI" },
    { valor: "NO" },
  ];

  /*CONSTRUCTOR*/
  constructor(
    private clienteService: ClienteService,
    private personaService: PersonaService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
    private mensajeIzi: MensajesIziToastService,
  ) {
    this.load_btn = false;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.sede = this.currentUser.sede;
    //this.amieRegex = this.patternAmie(this.sede.nombre);
    this.close = new EventEmitter<boolean>();
    this.listaPersona = new EventEmitter<any>();
    this.showDetail = true;
  }

  ngOnInit() {
    if (this.personaEditar) {
      this.formCliente = this.formBuilder.group({
        identificacion: new FormControl({ value: this.personaEditar.identificacion, disabled: true }, Validators.compose([
          MyValidators.isCedulaValid,
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$"),
        ])),
        nombres: new FormControl(this.personaEditar?.nombres, Validators.required),
        apellidos: new FormControl(this.personaEditar?.apellidos, Validators.required),
        fechaNacimiento: new FormControl(dayjs(this.personaEditar?.fechaNacimiento).format("YYYY-MM-DD")),
        direccion: new FormControl(this.personaEditar?.direccion),
        celular: new FormControl(this.personaEditar?.celular, Validators.required),
        correo: new FormControl(this.personaEditar?.correo, Validators.required),
        fechaInicio: new FormControl(dayjs(this.personaEditar?.cliente?.fechaInicio).format("YYYY-MM-DD")),
        tipoCliente: new FormControl(this.personaEditar?.cliente?.tipoCliente),
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formCliente = this.formBuilder.group({
        identificacion: new FormControl({ value: this.identificacionChild, disabled: false }, Validators.compose([
          MyValidators.isCedulaValid,
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$"),
        ])),
        nombres: new FormControl('', Validators.required),
        apellidos: new FormControl('', Validators.required),
        fechaNacimiento: new FormControl(''),
        direccion: new FormControl(''),
        celular: new FormControl('', Validators.required),
        correo: new FormControl('', Validators.required),
        fechaInicio: new FormControl(dayjs(new Date()).format("YYYY-MM-DD")),
        tipoCliente: new FormControl(''),
      })
    }
  }

  async listarClientePorIdentificacion() {
    this.personaService.listarPersonaPorIdentificacion(this.identificacionChild).subscribe(
      (respuesta) => {
        this.listaPersonaChild = respuesta['listado']
        for (const ele of this.listaPersonaChild) {
          ele.fechaNacimiento = dayjs(ele.fechaNacimiento).format("YYYY-MM-DD")
          if (ele.codigo != null) {
            this.clienteService.listarClientePorPersona(ele.codigo).subscribe(
              (respuesta) => {
                this.listaCliente = respuesta['listado'];
                ele.cliente = this.listaCliente[0];
                ele.cliente.fechaInicio = dayjs(ele.cliente.fechaInicio).format("YYYY-MM-DD")
              }
            )
          }
        }
        this.listaPersona.emit(this.listaPersonaChild);
      }
    );
  }

  verificarPersona() {
    // Receptar la identificación de formInscripcionCedula.value
    let clienteIdentificacionTemp = this.formCliente.value;
    this.identificacionChild = clienteIdentificacionTemp.identificacion;
    this.personaService.listarPersonaPorIdentificacion(this.identificacionChild).subscribe({
      next: (response) => {
        this.listaPersonaAux = response['listado'];
        this.persona = this.listaPersonaAux['0'];
        if (this.persona?.codigo != null) {
          this.formCliente.controls.fechaNacimiento.setValue(dayjs(this.persona?.fechaNacimiento).format("YYYY-MM-DD"));
          this.formCliente.controls.nombres.setValue(this.persona?.nombres);
          this.formCliente.controls.apellidos.setValue(this.persona?.apellidos);
          this.formCliente.controls.direccion.setValue(this.persona?.direccion);
          this.formCliente.controls.correo.setValue(this.persona?.correo);
          this.formCliente.controls.celular.setValue(this.persona?.celular);

          this.clienteService.listarClientePorPersona(this.persona?.codigo).subscribe(
            (respuesta) => {
              this.listaCliente = respuesta['listado'];
              this.persona.cliente = this.listaCliente[0];
              if (this.persona.cliente != undefined) {
                this.persona.cliente.fechaInicio = dayjs(this.persona.cliente.fechaInicio).format("YYYY-MM-DD");
                this.formCliente.controls.fechaInicio.setValue(dayjs(this.persona.cliente?.fechaInicio).format("YYYY-MM-DD"));
                this.formCliente.controls.tipoCliente.setValue(this.persona.cliente?.tipoCliente);
                }
            }
          )
        }
        this.personaEditar = this.persona;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  patternAmie(amie: string) {
    const valorEncontrar = amie
    const regExp = new RegExp('([0-9])\\w+')
    const amieFiltrado = valorEncontrar.match(regExp)
    return amieFiltrado['0']
  }

  addRegistroPersona() {
    if (this.formCliente?.valid) {
      let clienteTemp = this.formCliente.value;
      this.persona = new Persona({
        codigo: 0,
        identificacion: clienteTemp?.identificacion,
        nombres: clienteTemp?.nombres,
        apellidos: clienteTemp?.apellidos,
        fechaNacimiento: dayjs(clienteTemp?.fechaNacimiento).format("YYYY-MM-DD HH:mm:ss.SSS"),
        direccion: clienteTemp?.direccion,
        celular: clienteTemp?.celular,
        correo: clienteTemp?.correo,
        estado: 'A',
      });
    }
    if (this.personaEditar) {
      this.persona['data'].codigo = this.personaEditar?.codigo;
      this.persona['data'].identificacion = this.identificacionChild;
      this.personaService.guardarPersona(this.persona['data']).subscribe({
        next: (response) => {
          // Actualizar Datos Cliente
          this.addRegistroCliente();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.personaService.guardarPersona(this.persona['data']).subscribe({
        next: async (response) => {
          this.persona = response['objeto'];
          // Actualizar Datos Cliente
          this.addRegistroCliente();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al agregar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    }
  }

  addRegistroCliente() {
    if (this.formCliente?.valid) {
      let clienteTemp = this.formCliente.value;
      this.cliente = new Cliente({
        codigo: 0,
        codPersona: this.persona?.codigo,
        tipoCliente: clienteTemp.tipoCliente,
        fechaInicio: dayjs(clienteTemp.fechaInicio).format("YYYY-MM-DD HH:mm:ss.SSS"),
        estado: 'A',
      });
    }
    if (this.personaEditar) {
      this.cliente['data'].codigo = this.personaEditar?.cliente?.codigo;
      this.clienteService.guardarCliente(this.cliente['data']).subscribe({
        next: (response) => {
          this.listarClientePorIdentificacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.clienteService.guardarCliente(this.cliente['data']).subscribe({
        next: async (response) => {
          this.listarClientePorIdentificacion();
          this.mensajeService.mensajeCorrecto('Se ha agregado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al agregar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    }
  }

  closeDetail($event) {
    this.close.emit($event);
  }

  compararSede(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }

  // Contar los caracteres de la cedula para activar boton <Buscar>
  onKey(event) {
    if (event.target.value.length != 10) {
      this.resetTheForm();
    } else {
      this.verificarPersona();    }
  }
  
  resetTheForm(): void {
    this.formCliente.reset = null;
  }

  validateFormat(event) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }

    const regex = /[0-9]/;

    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

  get identificacionField() {
    return this.formCliente.get('identificacion');
  }
  get nombresField() {
    return this.formCliente.get('nombres');
  }
  get apellidosField() {
    return this.formCliente.get('apellidos');
  }
  get fechaNacimientoField() {
    return this.formCliente.get('fechaNacimiento');
  }
  get direccionField() {
    return this.formCliente.get('direccion');
  }
  get celularField() {
    return this.formCliente.get('celular');
  }
  get correoField() {
    return this.formCliente.get('correo');
  }
  get tipoClienteField() {
    return this.formCliente.get('tipoCliente');
  }
  get fechaInicioField() {
    return this.formCliente.get('fechaInicio');
  }
}
