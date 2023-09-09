import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { Usuario } from 'app/main/pages/compartidos/modelos/Usuario';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/seguridad/usuario/componentes/detail/detail.component';
import { UsuarioService } from '../../../servicios/usuario.service';
import { SedeService } from 'app/main/pages/seguridad/sede/servicios/sede.service';
import dayjs from "dayjs";
import { MyValidators } from 'app/utils/validators';
import { Persona } from 'app/main/pages/compartidos/modelos/Persona';
import { PersonaService } from 'app/main/pages/catalogo/persona/servicios/persona.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {
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
  public formUsuario: FormGroup;

  /*OBJETOS*/
  public usuario: Usuario;
  public persona: Persona;
  public listaSede: Sede[];
  public listaPersonaAux: Persona[];
  public listaUsuario: Usuario[];
  public listaRespuesta = [
    { valor: "SI" },
    { valor: "NO" },
  ];

  /*CONSTRUCTOR*/
  constructor(
    private usuarioService: UsuarioService,
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
      this.formUsuario = this.formBuilder.group({
        identificacion: new FormControl({ value: this.personaEditar.identificacion, disabled: true }, Validators.compose([
          MyValidators.isCedulaValid,
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("^[0-9]*$"),
        ])),
        nombres: new FormControl(this.personaEditar?.nombres, Validators.required),
        apellidos: new FormControl(this.personaEditar?.apellidos, Validators.required),
        fechaNacimiento: new FormControl(dayjs(this.personaEditar?.fechaNacimiento).format("YYYY-MM-DD"), Validators.compose([Validators.required, ,])),
        direccion: new FormControl(this.personaEditar?.direccion, Validators.required),
        celular: new FormControl(this.personaEditar?.celular, Validators.required),
        correo: new FormControl(this.personaEditar?.correo, Validators.required),
        cambioClave: new FormControl(this.personaEditar?.usuario?.cambioClave, Validators.required),
        actualizacionDatos: new FormControl(this.personaEditar?.usuario?.actualizacionDatos, Validators.required),
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formUsuario = this.formBuilder.group({
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
        fechaNacimiento: new FormControl('', Validators.required),
        direccion: new FormControl('', Validators.required),
        celular: new FormControl('', Validators.required),
        correo: new FormControl('', Validators.required),
        cambioClave: new FormControl('', Validators.required),
        actualizacionDatos: new FormControl('', Validators.required),
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

  async listarUsuarioPorIdentificacion() {
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
            this.usuarioService.listarUsuarioPorPersona(ele.codigo).subscribe(
              (respuesta) => {
                this.listaUsuario = respuesta['listado'];
                ele.usuario = this.listaUsuario[0];
                ele.usuario.fechaInicio = dayjs(ele.usuario.fechaInicio).format("YYYY-MM-DD")
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
    let usuarioIdentificacionTemp = this.formUsuario.value;
    this.identificacionChild = usuarioIdentificacionTemp.identificacion;
    this.personaService.listarPersonaPorIdentificacion(this.identificacionChild).subscribe({
      next: (response) => {
        this.listaPersonaAux = response['listado'];
        this.persona = this.listaPersonaAux['0'];
        if (this.persona?.codigo != null) {
          this.formUsuario.controls.fechaNacimiento.setValue(dayjs(this.persona?.fechaNacimiento).format("YYYY-MM-DD"));
          this.formUsuario.controls.nombres.setValue(this.persona?.nombres);
          this.formUsuario.controls.apellidos.setValue(this.persona?.apellidos);
          this.formUsuario.controls.direccion.setValue(this.persona?.direccion);
          this.formUsuario.controls.correo.setValue(this.persona?.correo);
          this.formUsuario.controls.celular.setValue(this.persona?.celular);

          this.usuarioService.listarUsuarioPorPersona(this.persona?.codigo).subscribe(
            (respuesta) => {
              this.listaUsuario = respuesta['listado'];
              this.persona.usuario = this.listaUsuario[0];
              if (this.persona.usuario != undefined) {
                this.persona.usuario.fechaInicio = dayjs(this.persona.usuario.fechaInicio).format("YYYY-MM-DD");
                this.formUsuario.controls.fechaInicio.setValue(dayjs(this.persona.usuario?.fechaInicio).format("YYYY-MM-DD"));
                this.formUsuario.controls.tipoUsuario.setValue(this.persona.usuario?.tipoUsuario);
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
    if (this.formUsuario?.valid) {
      let usuarioTemp = this.formUsuario.value;
      this.persona = new Persona({
        codigo: 0,
        identificacion: usuarioTemp?.identificacion,
        nombres: usuarioTemp?.nombres,
        apellidos: usuarioTemp?.apellidos,
        fechaNacimiento: dayjs(usuarioTemp?.fechaNacimiento).format("YYYY-MM-DD HH:mm:ss.SSS"),
        direccion: usuarioTemp?.direccion,
        celular: usuarioTemp?.celular,
        correo: usuarioTemp?.correo,
        estado: 'A',
      });
    }
    if (this.personaEditar) {
      this.persona['data'].codigo = this.personaEditar?.codigo;
      this.persona['data'].identificacion = this.identificacionChild;
      this.personaService.guardarPersona(this.persona['data']).subscribe({
        next: (response) => {
          // Actualizar Datos Usuario
          this.addRegistroUsuario();
          // Actualiza la lista con los datos actualizados
          //this.listarUsuarioPorIdentificacion();
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
          // Actualizar Datos Usuario
          this.addRegistroUsuario();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al agregar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    }
  }

  addRegistroUsuario() {
    if (this.formUsuario?.valid) {
      let usuarioTemp = this.formUsuario.value;
      let codSede = 0;
      if (usuarioTemp?.sede != undefined) {
        codSede = usuarioTemp.sede?.codigo;
      }
      this.usuario = new Usuario({
        codigo: 0,
        codPersona: this.persona?.codigo,
        cambioClave: usuarioTemp.cambioClave,
        actualizacionDatos: usuarioTemp.actualizacionDatos,
        estado: 'A',
        codSede: codSede,
      });
    }
    if (this.personaEditar) {
      this.usuario['data'].codigo = this.personaEditar?.usuario?.codigo;
      this.usuarioService.guardarUsuario(this.usuario['data']).subscribe({
        next: (response) => {
          this.listarUsuarioPorIdentificacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.usuarioService.guardarUsuario(this.usuario['data']).subscribe({
        next: async (response) => {
          this.listarUsuarioPorIdentificacion();
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
    this.formUsuario.reset = null;
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
    return this.formUsuario.get('identificacion');
  }
  get nombresField() {
    return this.formUsuario.get('nombres');
  }
  get apellidosField() {
    return this.formUsuario.get('apellidos');
  }
  get fechaNacimientoField() {
    return this.formUsuario.get('fechaNacimiento');
  }
  get direccionField() {
    return this.formUsuario.get('direccion');
  }
  get celularField() {
    return this.formUsuario.get('celular');
  }
  get correoField() {
    return this.formUsuario.get('correo');
  }
  get tipoUsuarioField() {
    return this.formUsuario.get('tipoUsuario');
  }
  get fechaInicioField() {
    return this.formUsuario.get('fechaInicio');
  }
}
