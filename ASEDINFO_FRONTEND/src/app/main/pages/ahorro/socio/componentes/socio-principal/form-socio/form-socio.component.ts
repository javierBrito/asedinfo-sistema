import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { Socio } from 'app/main/pages/compartidos/modelos/Socio';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/ahorro/socio/componentes/detail/detail.component';
import { SedeService } from 'app/main/pages/seguridad/sede/servicios/sede.service';
import dayjs from "dayjs";
import { MyValidators } from 'app/utils/validators';
import { Persona } from 'app/main/pages/compartidos/modelos/Persona';
import { PersonaService } from 'app/main/pages/catalogo/persona/servicios/persona.service';
import { SocioService } from '../../../servicios/socio.service';

@Component({
  selector: 'app-form-socio',
  templateUrl: './form-socio.component.html',
  styleUrls: ['./form-socio.component.scss']
})
export class FormSocioComponent implements OnInit {
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
  public formSocio: FormGroup;

  /*OBJETOS*/
  public socio: Socio;
  public persona: Persona;
  public listaSede: Sede[];
  public listaPersonaAux: Persona[];
  public listaSocio: Socio[];
  public listaRespuesta = [
    { valor: "SI" },
    { valor: "NO" },
  ];

  /*CONSTRUCTOR*/
  constructor(
    private socioService: SocioService,
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
      this.formSocio = this.formBuilder.group({
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
        direccion: new FormControl(this.personaEditar?.direccion, Validators.required),
        celular: new FormControl(this.personaEditar?.celular, Validators.required),
        correo: new FormControl(this.personaEditar?.correo, Validators.required),
        fechaInicio: new FormControl(dayjs(this.personaEditar?.socio?.fechaInicio).format("YYYY-MM-DD")),
        tipoSocio: new FormControl(this.personaEditar?.socio?.tipoSocio),
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formSocio = this.formBuilder.group({
        identificacion: new FormControl({ value: this.identificacionChild, disabled: false }, Validators.compose([
          MyValidators.isCedulaValid,
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$"),
        ])),
        sede: new FormControl(''),
        nombres: new FormControl('', Validators.required),
        apellidos: new FormControl('', Validators.required),
        fechaNacimiento: new FormControl(''),
        direccion: new FormControl('', Validators.required),
        celular: new FormControl('', Validators.required),
        correo: new FormControl('', Validators.required),
        fechaInicio: new FormControl(''),
        tipoSocio: new FormControl(''),
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

  async listarSocioPorIdentificacion() {
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
          if (ele.codigo != null) {
            this.socioService.listarSocioPorPersona(ele.codigo).subscribe(
              (respuesta) => {
                this.listaSocio = respuesta['listado'];
                ele.socio = this.listaSocio[0];
                ele.socio.fechaInicio = dayjs(ele.socio.fechaInicio).format("YYYY-MM-DD")
              }
            )
          }
        }
        this.listaPersona.emit(this.listaPersonaChild);
      }
    );
  }

  verificarPersona() {
    // Receptar la identificación de formSocio.value
    let socioIdentificacionTemp = this.formSocio.value;
    this.identificacionChild = socioIdentificacionTemp.identificacion;
    this.personaService.listarPersonaPorIdentificacion(this.identificacionChild).subscribe({
      next: (response) => {
        this.listaPersonaAux = response['listado'];
        this.persona = this.listaPersonaAux['0'];
        if (this.persona?.codigo != null) {
          this.formSocio.controls.fechaNacimiento.setValue(dayjs(this.persona?.fechaNacimiento).format("YYYY-MM-DD"));
          this.formSocio.controls.nombres.setValue(this.persona?.nombres);
          this.formSocio.controls.apellidos.setValue(this.persona?.apellidos);
          this.formSocio.controls.direccion.setValue(this.persona?.direccion);
          this.formSocio.controls.correo.setValue(this.persona?.correo);
          this.formSocio.controls.celular.setValue(this.persona?.celular);

          this.socioService.listarSocioPorPersona(this.persona?.codigo).subscribe(
            (respuesta) => {
              this.listaSocio = respuesta['listado'];
              this.persona.socio = this.listaSocio[0];
              if (this.persona.socio != undefined) {
                this.persona.socio.fechaInicio = dayjs(this.persona.socio.fechaInicio).format("YYYY-MM-DD");
                this.formSocio.controls.fechaInicio.setValue(dayjs(this.persona.socio?.fechaInicio).format("YYYY-MM-DD"));
                this.formSocio.controls.tipoSocio.setValue(this.persona.socio?.tipoSocio);
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
    if (this.formSocio?.valid) {
      let socioTemp = this.formSocio.value;
      let codigoSede = 0;
      if (socioTemp?.sede != "") {
        codigoSede = socioTemp.sede?.codigo;
      }
      this.persona = new Persona({
        codigo: 0,
        identificacion: socioTemp?.identificacion,
        nombres: socioTemp?.nombres,
        apellidos: socioTemp?.apellidos,
        fechaNacimiento: dayjs(socioTemp?.fechaNacimiento).format("YYYY-MM-DD HH:mm:ss.SSS"),
        direccion: socioTemp?.direccion,
        celular: socioTemp?.celular,
        correo: socioTemp?.correo,
        estado: 'A',
        codigoSede: codigoSede,
      });
    }
    if (this.personaEditar) {
      this.persona['data'].codigo = this.personaEditar?.codigo;
      this.persona['data'].identificacion = this.identificacionChild;
      this.personaService.guardarPersona(this.persona['data']).subscribe({
        next: (response) => {
          // Actualizar Datos Socio
          this.addRegistroSocio();
          // Actualiza la lista con los datos actualizados
          //this.listarSocioPorIdentificacion();
          //this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          //this.parentDetail.closeDetail();
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
          // Actualizar Datos Socio
          this.addRegistroSocio();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al agregar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    }
  }

  addRegistroSocio() {
    if (this.formSocio?.valid) {
      let socioTemp = this.formSocio.value;
      this.socio = new Socio({
        codigo: 0,
        codPersona: this.persona?.codigo,
        tipoSocio: socioTemp.tipoSocio,
        fechaInicio: dayjs(socioTemp.fechaInicio).format("YYYY-MM-DD HH:mm:ss.SSS"),
        estado: 'A',
      });
    }
    if (this.personaEditar) {
      this.socio['data'].codigo = this.personaEditar?.socio?.codigo;
      this.socioService.guardarSocio(this.socio['data']).subscribe({
        next: (response) => {
          this.listarSocioPorIdentificacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.socioService.guardarSocio(this.socio['data']).subscribe({
        next: async (response) => {
          this.listarSocioPorIdentificacion();
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
    this.formSocio.reset = null;
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
    return this.formSocio.get('identificacion');
  }
  get nombresField() {
    return this.formSocio.get('nombres');
  }
  get apellidosField() {
    return this.formSocio.get('apellidos');
  }
  get fechaNacimientoField() {
    return this.formSocio.get('fechaNacimiento');
  }
  get direccionField() {
    return this.formSocio.get('direccion');
  }
  get celularField() {
    return this.formSocio.get('celular');
  }
  get correoField() {
    return this.formSocio.get('correo');
  }
  get tipoSocioField() {
    return this.formSocio.get('tipoSocio');
  }
  get fechaInicioField() {
    return this.formSocio.get('fechaInicio');
  }
}
