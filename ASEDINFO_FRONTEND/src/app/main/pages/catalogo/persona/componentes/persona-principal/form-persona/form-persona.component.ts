import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { Persona } from 'app/main/pages/compartidos/modelos/Persona';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/catalogo/persona/componentes/detail/detail.component';
import { PersonaService } from '../../../servicios/persona.service';
import { SedeService } from 'app/main/pages/seguridad/sede/servicios/sede.service';
import dayjs from "dayjs";
import { MyValidators } from 'app/utils/validators';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss']
})
export class FormPersonaComponent implements OnInit {
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
  public formPersona: FormGroup;
  public listaPersonaAux: Persona[];

  /*OBJETOS*/
  public persona: Persona;
  public listaSede: Sede[];
  public listaRespuesta = [
    { valor: "SI" },
    { valor: "NO" },
  ];

  /*CONSTRUCTOR*/
  constructor(
    private personaService: PersonaService,
    private sedeService: SedeService,
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
    this.listarSedeActivo();
    if (this.personaEditar) {
      this.formPersona = this.formBuilder.group({
        identificacion: new FormControl({ value: this.personaEditar.identificacion, disabled: true }, Validators.compose([
          MyValidators.isCedulaValid,
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$"),
        ])),
        nombres: new FormControl(this.personaEditar.nombres, Validators.required),
        apellidos: new FormControl(this.personaEditar.apellidos, Validators.required),
        fechaNacimiento: new FormControl(dayjs(this.personaEditar.fechaNacimiento).format("YYYY-MM-DD")),
        direccion: new FormControl(this.personaEditar.direccion),
        celular: new FormControl(this.personaEditar.celular, Validators.required),
        correo: new FormControl(this.personaEditar.correo, Validators.required),
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formPersona = this.formBuilder.group({
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
      })
    }
  }

  listarSedeActivo() {
    this.sedeService.listarSedeActivo().subscribe({
      next: (response) => {
        this.listaSede = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  async listarPersonaPorIdentificacion() {
    this.personaService.listarPersonaPorIdentificacion(this.identificacionChild).subscribe(
      (respuesta) => {
        this.listaPersonaChild = respuesta['listado']
        for (const ele of this.listaPersonaChild) {
          ele.fechaNacimiento = dayjs(ele.fechaNacimiento).format("YYYY-MM-DD")
          if (ele.codigoSede != null) {
            this.sedeService.buscarSedePorCodigo(ele.codigoSede).subscribe(
              (respuesta) => {
                ele.sede = respuesta['objeto'];
              }
            )
          }
        }
        this.listaPersona.emit(this.listaPersonaChild);
      }
    );
  }

  patternAmie(amie: string) {
    const valorEncontrar = amie
    const regExp = new RegExp('([0-9])\\w+')
    const amieFiltrado = valorEncontrar.match(regExp)
    return amieFiltrado['0']
  }

  addRegistro() {
    if (this.formPersona?.valid) {
      let personaTemp = this.formPersona.value;
      this.persona = new Persona({
        codigo: 0,
        identificacion: personaTemp.identificacion,
        nombres: personaTemp.nombres,
        apellidos: personaTemp.apellidos,
        fechaNacimiento: dayjs(personaTemp.fechaNacimiento).format("YYYY-MM-DD HH:mm:ss.SSS"),
        direccion: personaTemp.direccion,
        celular: personaTemp.celular,
        correo: personaTemp.correo,
        estado: 'A',
      });
    }
    if (this.personaEditar) {
      this.persona['data'].codigo = this.personaEditar.codigo;
      this.persona['data'].identificacion = this.identificacionChild;
      this.personaService.guardarPersona(this.persona['data']).subscribe({
        next: (response) => {
          this.listarPersonaPorIdentificacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.personaService.guardarPersona(this.persona['data']).subscribe({
        next: async (response) => {
          this.listarPersonaPorIdentificacion();
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

  // Contar los caracteres de la cedula para activar boton <Buscar>
  onKey(event) {
    if (event.target.value.length != 10) {
      this.resetTheForm();
    } else {
      this.verificarPersona();    }
  }
  
  resetTheForm(): void {
    this.formPersona.reset = null;
  }

  verificarPersona() {
    // Receptar la identificación de formInscripcionCedula.value
    let clienteIdentificacionTemp = this.formPersona.value;
    this.identificacionChild = clienteIdentificacionTemp.identificacion;
    this.personaService.listarPersonaPorIdentificacion(this.identificacionChild).subscribe({
      next: (response) => {
        this.listaPersonaAux = response['listado'];
        this.persona = this.listaPersonaAux['0'];
        if (this.persona?.codigo != null) {
          this.formPersona.controls.fechaNacimiento.setValue(dayjs(this.persona?.fechaNacimiento).format("YYYY-MM-DD"));
          this.formPersona.controls.nombres.setValue(this.persona?.nombres);
          this.formPersona.controls.apellidos.setValue(this.persona?.apellidos);
          this.formPersona.controls.direccion.setValue(this.persona?.direccion);
          this.formPersona.controls.correo.setValue(this.persona?.correo);
          this.formPersona.controls.celular.setValue(this.persona?.celular);
        }
        this.personaEditar = this.persona;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  get identificacionField() {
    return this.formPersona.get('identificacion');
  }
  get nombresField() {
    return this.formPersona.get('nombres');
  }
  get apellidosField() {
    return this.formPersona.get('apellidos');
  }
  get fechaNacimientoField() {
    return this.formPersona.get('fechaNacimiento');
  }
  get direccionField() {
    return this.formPersona.get('direccion');
  }
  get celularField() {
    return this.formPersona.get('celular');
  }
  get correoField() {
    return this.formPersona.get('correo');
  }
}
