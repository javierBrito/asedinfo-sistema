import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginAplicacion } from 'app/auth/models/loginAplicacion';
import { Sede } from 'app/auth/models/sede';
import { UsuarioRolAplicacion } from 'app/main/pages/compartidos/modelos/UsuarioRolAplicacion';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { UsuarioRolAplicacionService } from '../../servicios/usuarioRolAplicacion.service';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { AplicacionService } from 'app/main/pages/seguridad/aplicacion/servicios/aplicacion.service';
import { RolAplicacion } from 'app/main/pages/compartidos/modelos/RolAplicacion';
import { RolAplicacionService } from 'app/main/pages/seguridad/rolAplicacion/servicios/rolAplicacion.service';
import { RecursoService } from 'app/main/pages/seguridad/recurso/servicios/recurso.service';
import { UsuarioAplicacion } from 'app/main/pages/compartidos/modelos/UsuarioAplicacion';
import { MyValidators } from 'app/utils/validators';
import { UsuarioService } from 'app/main/pages/seguridad/usuario/servicios/usuario.service';
import { Usuario } from 'app/main/pages/compartidos/modelos/Usuario';
import { RolAplicacionRecurso } from 'app/main/pages/compartidos/modelos/RolAplicacionRecurso';
import { RolAplicacionRecursoService } from 'app/main/pages/seguridad/rolAplicacionRecurso/servicios/rolAplicacionRecurso.service';

@Component({
  selector: 'app-usuarioRolAplicacion-principal',
  templateUrl: './usuarioRolAplicacion-principal.component.html',
  styleUrls: ['./usuarioRolAplicacion-principal.component.scss']
})
export class UsuarioRolAplicacionPrincipalComponent implements OnInit {
  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;

  /*VARIABLES*/
  public codAplicacion: number;
  public codRolAplicacion: number;
  public nombreAplicacion: string;
  public identificacion: string;
  public nombreRolAplicacion: string;
  public codUsuario: number;
  public codUsuarioAplicacion: number;
  public codUsuarioRolAplicacion: number;

  /*LISTAS*/
  public listaUsuarioRolAplicacion: UsuarioRolAplicacion[] = [];
  public listaAplicacion: Aplicacion[] = [];
  public listaRolAplicacion: RolAplicacion[] = [];
  public listaRolAplicacionRecurso: RolAplicacionRecurso[] = [];
  public listaUsuarioAplicacion: UsuarioAplicacion[] = [];
  public listaUsuario: Usuario[] = [];

  /*TABS*/
  public selectedTab: number;

  /*OBJETOS*/
  private currentUser: LoginAplicacion;
  private sede: Sede;
  public rolAplicacionRecursoSeleccionado: RolAplicacionRecurso;
  public usuario: Usuario;
  public aplicacion: Aplicacion;
  public rolAplicacion: RolAplicacion;

  /*DETAIL*/
  public showDetail: boolean;

  /*PAGINACION*/
  public page: number;
  public itemsRegistros: number;

  /*FORMULARIOS*/
  public formUsuarioRolAplicacion: FormGroup;

  /*CONSTRUCTOR */
  constructor(
    /*Servicios*/
    private readonly usuarioRolAplicacionService: UsuarioRolAplicacionService,
    private readonly usuarioAplicacionService: UsuarioRolAplicacionService,
    private readonly aplicacionService: AplicacionService,
    private readonly rolAplicacionRecursoService: RolAplicacionRecursoService,
    private readonly rolAplicacionService: RolAplicacionService,
    private readonly recursoService: RecursoService,
    private readonly usuarioService: UsuarioService,
    private readonly mensajeService: MensajeService,
    private readonly formBuilder: FormBuilder,
  ) {
    this.itemsRegistros = 5;
    // Para paginar
    this.page = 1;
    this.showDetail = false;
    this.selectedTab = 0;
    // Datos del usuario del contexto
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.sede = this.currentUser.sede;
  }

  ngOnInit() {
    this.formUsuarioRolAplicacion = this.formBuilder.group({
      identificacion: new FormControl('', Validators.compose([
        MyValidators.isCedulaValid,
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$"),
      ])),
      usuarioAplicacion: new FormControl('', Validators.required),
      usuarioRolAplicacion: new FormControl('', Validators.required)
    })
  }

  listarUsuarioAplicacionPorCodUsuario() {
    this.listaUsuarioRolAplicacion = [];
    // Receptar la identificación de formUsuarioRolAplicacion.value
    let identificacionTemp = this.formUsuarioRolAplicacion.value;
    this.identificacion = identificacionTemp.identificacion;

    // Obtener Usuario
    this.usuarioService.listarUsuarioPorIdentificacion(this.identificacion).subscribe(
      (respuesta) => {
        this.listaUsuario = respuesta['listado'];
        this.usuario = this.listaUsuario?.[0];
        if (this.usuario != undefined) {
          this.codUsuario = this.usuario?.codigo;
          // Obtener Usuario Aplicación
          this.usuarioAplicacionService.listarUsuarioAplicacionPorCodUsuario(this.usuario?.codigo).subscribe({
            next: (response) => {
              this.listaUsuarioAplicacion = response['listado'];
              for (const ele of this.listaUsuarioAplicacion) {
                this.aplicacionService.buscarAplicacionPorCodigo(ele.codAplicacion).subscribe(
                  (respuesta) => {
                    ele.aplicacion = respuesta['objeto'];
                  }
                )
              }
            },
            error: (error) => {
              console.log(error);
            }
          });
        } else {
          this.mensajeService.mensajeError('Ha habido un problema, no existe el usuario registrelo...');
        }
      }
    );
  }

  async listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion() {
    this.listaRolAplicacionRecurso = [];
    // Receptar el this.codAplicacion de formUsuarioRolAplicacion.value
    let usuarioRolAplicacionTemp = this.formUsuarioRolAplicacion.value;
    this.codAplicacion = usuarioRolAplicacionTemp.usuarioAplicacion?.codAplicacion;
    this.nombreAplicacion = usuarioRolAplicacionTemp.usuarioAplicacion?.aplicacion?.nombre;
    this.aplicacion = usuarioRolAplicacionTemp.usuarioAplicacion?.aplicacion;
    this.codUsuarioAplicacion = usuarioRolAplicacionTemp.usuarioAplicacion?.codigo;

    // Tratar Usuario Rol Aplicacion por Código Usuario y Código Aplicación
    this.usuarioRolAplicacionService.listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion(this.usuario?.codigo, this.codAplicacion).subscribe(
      (respuesta) => {
        this.listaUsuarioRolAplicacion = respuesta['listado'];
        for (const ele of this.listaUsuarioRolAplicacion) {
          this.rolAplicacionService.buscarRolAplicacionPorCodigo(ele.codRolAplicacion).subscribe(
            (respuesta) => {
              ele.rolAplicacion = respuesta['objeto'];
            }
          )
        }
      }
    );
  }

  async listarRolAplicacionRecursoPorRolAplicacion() {
    // Receptar el this.codRolAplicacion de formUsuarioRolAplicacion.value
    let usuarioRolAplicacionTemp = this.formUsuarioRolAplicacion.value;
    this.codRolAplicacion = usuarioRolAplicacionTemp.usuarioRolAplicacion?.codRolAplicacion;
    this.nombreRolAplicacion = usuarioRolAplicacionTemp.usuarioRolAplicacion?.rolAplicacion?.nombreRol;
    this.rolAplicacion = usuarioRolAplicacionTemp.usuarioRolAplicacion?.rolAplicacion;
    this.codUsuarioRolAplicacion = usuarioRolAplicacionTemp.usuarioRolAplicacion?.codigo;

    // Tratar Rol Aplicacion Recurso
    this.rolAplicacionRecursoService.listarRolAplicacionRecursoPorRolAplicacion(this.codRolAplicacion).subscribe(
      (respuesta) => {
        this.listaRolAplicacionRecurso = respuesta['listado'];
        for (const registro of this.listaRolAplicacionRecurso) {
          if (registro?.codigoRecurso != null) {
            // Tratar Recurso
            this.recursoService.buscarRecursoPorCodigo(registro?.codigoRecurso).subscribe(
              (respuesta) => {
                registro.recurso = respuesta['objeto'];
              }
            )
            this.rolAplicacionService.buscarRolAplicacionPorCodigo(registro.codigoRolAplicacion).subscribe(
              (respuesta) => {
                registro.rolAplicacion = respuesta['objeto'];
              }
            )
          }
        }
        if (this.listaRolAplicacionRecurso.length < this.itemsRegistros) {
          this.page = 1;
        }
      }
    );
  }

  listaRolAplicacionRecursoActualizada(event) {
    this.listaRolAplicacionRecurso = event;
  }

  openDetail() {
    this.showDetail = true;
  }

  openEditarDetail(rolAplicacionRecurso: RolAplicacionRecurso) {
    this.rolAplicacionRecursoSeleccionado = rolAplicacionRecurso;
    if (this.listaRolAplicacionRecurso.length < this.itemsRegistros) {
      this.page = 1;
    }
    this.showDetail = true;
  }

  openRemoverDetail() {
    Swal
      .fire({
        title: "Eliminar los registros relacionados con el Rol " + this.nombreRolAplicacion,
        text: "¿Quieres borrar los registros?'",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      })
      .then(resultado => {
        if (resultado.value) {
          // Hicieron click en "Sí, eliminar"
          this.usuarioRolAplicacionService.eliminarUsuarioRolAplicacionPorId(this.codUsuarioRolAplicacion).subscribe({
            next: (response) => {
              //this.listarUsuarioRolAplicacionPorCodUsuarioYCodAplicacion();
              //this.listaUsuarioRolAplicacion = [];
              this.listaRolAplicacionRecurso = [];
              this.mensajeService.mensajeCorrecto('El registro ha sido borrada con éxito...');
              this.page = 1;
            },
            error: (error) => {
              this.mensajeService.mensajeError('Ha habido un problema al borrar el registro...');
            }
          });
        } else {
          // Hicieron click en "Cancelar"
          console.log("*Se cancela el proceso...*");
        }
      });
  }

  compararUsuarioAplicacion(o1, o2) {
    return o1 === undefined || o2 === undefined ? false : o1.codigo === o2.codigo;
  }

  compararUsuarioRolAplicacion(o1, o2) {
    return o1 === undefined || o2 === undefined ? false : o1.codigo === o2.codigo;
  }

  closeDetail($event) {
    this.showDetail = $event;
    this.rolAplicacionRecursoSeleccionado = null;
  }

  // Contar los caracteres de la cedula para activar boton <Buscar>
  onKey(event) {
    if (event.target.value.length != 10) {
      this.resetTheForm();
    } else {
      this.listarUsuarioAplicacionPorCodUsuario();
    }
  }

  resetTheForm(): void {
    this.listaUsuarioRolAplicacion = null;
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

  /* Variables del html, para receptar datos y validaciones*/
  get identificacionField() {
    return this.formUsuarioRolAplicacion.get('identificacion');
  }

}
