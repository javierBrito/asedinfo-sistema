import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { UsuarioRolAplicacion } from 'app/main/pages/compartidos/modelos/UsuarioRolAplicacion';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/seguridad/usuarioRolAplicacion/componentes/detail/detail.component';
import { UsuarioRolAplicacionService } from '../../../servicios/usuarioRolAplicacion.service';
import { AplicacionService } from 'app/main/pages/seguridad/aplicacion/servicios/aplicacion.service';
import { Recurso } from 'app/main/pages/compartidos/modelos/Recurso';
import { RolAplicacionService } from 'app/main/pages/seguridad/rolAplicacion/servicios/rolAplicacion.service';
import { RolAplicacion } from 'app/main/pages/compartidos/modelos/RolAplicacion';
import { RecursoService } from 'app/main/pages/seguridad/recurso/servicios/recurso.service';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { RolAplicacionRecursoService } from 'app/main/pages/seguridad/rolAplicacionRecurso/servicios/rolAplicacionRecurso.service';
import dayjs from "dayjs";
import { UsuarioAplicacion } from 'app/main/pages/compartidos/modelos/UsuarioAplicacion';

@Component({
  selector: 'app-form-usuarioRolAplicacion',
  templateUrl: './form-usuarioRolAplicacion.component.html',
  styleUrls: ['./form-usuarioRolAplicacion.component.scss']
})
export class FormUsuarioRolAplicacionComponent implements OnInit {
  /*SPINNER*/
  public load_btn: boolean;

  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaRolAplicacionRecurso: EventEmitter<any>;

  /*INPUT RECIBEN*/
  @Input() listaRolAplicacionRecursoChild: any;
  @Input() rolAplicacionRecursoEditar: UsuarioRolAplicacion;
  @Input() codigoChild: number;
  @Input() codAplicacionChild: number;
  @Input() codRolAplicacionChild: number;
  @Input() nombreAplicacionChild: string;
  @Input() aplicacionChild: Aplicacion;
  @Input() codUsuarioChild: number;
  @Input() codUsuarioAplicacionChild: number;
  @Input() codUsuarioRolAplicacionChild: number;

  /*MODALES*/
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;

  /*VARIABLES */
  public showDetail: boolean;
  private amieRegex: string;
  private currentUser: any;
  private sede: Sede;
  private codAplicacion: number;
  private codRolAplicacion: number;
  public disabledBotonGuardar: boolean;
  private estadoUsuarioRol: string;
  public loadDatos: boolean;

  /*FORMULARIOS*/
  public formUsuarioRolAplicacion: FormGroup;

  /*OBJETOS*/
  public usuarioRolAplicacion: UsuarioRolAplicacion;
  public usuarioAplicacion: UsuarioAplicacion;
  public recurso: Recurso;
  public listaRolAplicacion: RolAplicacion[];
  public listaUsuarioAplicacion: UsuarioAplicacion[];
  public listaUsuarioRolAplicacion: UsuarioRolAplicacion[];
  public listaAplicacion: Aplicacion[];
  public listaRecurso: Recurso[];

  /*CONSTRUCTOR*/
  constructor(
    private usuarioRolAplicacionService: UsuarioRolAplicacionService,
    private rolAplicacionService: RolAplicacionService,
    private usuarioAplicacionService: UsuarioRolAplicacionService,
    private rolAplicacionRecursoService: RolAplicacionRecursoService,
    private recursoService: RecursoService,
    private aplicacionService: AplicacionService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
    private mensajeIzi: MensajesIziToastService,
  ) {
    this.load_btn = false;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.sede = this.currentUser.sede;
    //this.amieRegex = this.patternAmie(this.sede.nombreRol);
    this.close = new EventEmitter<boolean>();
    this.listaRolAplicacionRecurso = new EventEmitter<any>();
    this.showDetail = true;

  }

  ngOnInit() {
    this.loadDatos = false;
    this.disabledBotonGuardar = true;
    this.listarAplicacion();
    if (this.rolAplicacionRecursoEditar) {
      this.codAplicacion = this.codAplicacionChild;
      this.codRolAplicacion = this.codRolAplicacionChild;
      this.listarRolAplicacionPorCodAplicacion();
      this.listarRolAplicacionRecursoPorRolAplicacion();

      this.formUsuarioRolAplicacion = this.formBuilder.group({
        aplicacion: new FormControl({ value: this.aplicacionChild, disabled: true }),
        rolAplicacion: new FormControl({ value: this.rolAplicacionRecursoEditar?.rolAplicacion, disabled: true }, Validators.required),
        rolAplicacionRecurso: new FormControl({ value: this.rolAplicacionRecursoEditar, disabled: true }, Validators.required),
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.codAplicacionChild = null;
      this.codRolAplicacionChild = null;
      this.listaRolAplicacionRecursoChild = [];
      this.formUsuarioRolAplicacion = this.formBuilder.group({
        aplicacion: new FormControl('', Validators.required),
        rolAplicacion: new FormControl('', Validators.required),
        rolAplicacionRecurso: new FormControl('', Validators.required),
      })
    }
  }

  listarAplicacion() {
    this.aplicacionService.listarAplicacionActivo().subscribe({
      next: (response) => {
        this.listaAplicacion = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  listarRolAplicacionPorCodAplicacion() {
    this.disabledBotonGuardar = true;
    this.listaRolAplicacionRecursoChild = [];
    if (this.codAplicacionChild == null || this.codAplicacionChild == undefined) {
      // Receptar el codAplicacion de formUsuarioRolAplicacion.value
      let formUsuarioRolAplicacionTemp = this.formUsuarioRolAplicacion.value;
      this.codAplicacion = formUsuarioRolAplicacionTemp.aplicacion.codigo;
    }

    // Verificar si ya existe el registro de Usuario & Aplicación
    this.usuarioAplicacionService.listarUsuarioAplicacionPorUsuarioYAplicacion(this.codUsuarioChild, this.codAplicacion).subscribe(
      (respuesta) => {
        this.listaUsuarioAplicacion = respuesta['listado'];
        if (this.listaUsuarioAplicacion.length > 0) {
          this.codUsuarioAplicacionChild = this.listaUsuarioAplicacion[0].codigo;
        }
      }
    )

    // Tratar Rol Aplicacion por Codigo Aplicacion
    this.rolAplicacionService.listarRolAplicacionPorCodAplicacion(this.codAplicacion).subscribe({
      next: async (response) => {
        this.listaRolAplicacion = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  listarRolAplicacionRecursoPorRolAplicacion = async () => {
    this.disabledBotonGuardar = true;
    this.estadoUsuarioRol = "";
    if (this.codRolAplicacionChild == null || this.codRolAplicacionChild == undefined) {
      // Receptar el codRolAplicacion de formUsuarioRolAplicacion.value
      let formUsuarioRolAplicacionTemp = this.formUsuarioRolAplicacion.value;
      this.codRolAplicacion = formUsuarioRolAplicacionTemp.rolAplicacion.codigo;
    }

    // Verificar si ya existe el registro de Usuario & Rol & Aplicación
    await this.verificarExisteRegistro();
    // Obtener los registros de Rol Aplicación Recurso
    await this.obtenerRegistrosRolAplicacionRecurso();

    setTimeout(() => {
      this.loadDatos = true;
    }, 1000);
  }

  verificarExisteRegistro() {
    // Verificar si ya existe el registro de Usuario & Rol & Aplicación
    return new Promise((resolve, rejects) => {
      this.usuarioRolAplicacionService.listarUsuarioRolAplicacionPorCodUsuarioYCodRolAplicacion(this.codUsuarioChild, this.codRolAplicacion).subscribe({
        next: async (respuesta) => {
          this.listaUsuarioRolAplicacion = respuesta['listado'];
          if (this.listaUsuarioRolAplicacion.length > 0) {
            this.codUsuarioRolAplicacionChild = this.listaUsuarioRolAplicacion[0].codigo;
            this.estadoUsuarioRol = this.listaUsuarioRolAplicacion[0].estado;
          }
          resolve(respuesta);
        },
        error: (error) => {
          console.log(error);
          rejects("Error");
        }
      });
    })
  }

  obtenerRegistrosRolAplicacionRecurso() {
    // Tratar Rol Aplicacion Recurso por Codigo Rol Aplicacion
    return new Promise((resolve, rejects) => {
      this.rolAplicacionRecursoService.listarRolAplicacionRecursoPorRolAplicacion(this.codRolAplicacion).subscribe({
        next: async (response) => {
          this.listaRolAplicacionRecursoChild = response['listado'];
          if (this.listaRolAplicacionRecursoChild.length > 0 && (this.estadoUsuarioRol == 'I' || this.estadoUsuarioRol == '')) {
            this.disabledBotonGuardar = false;
          }
          for (const ele of this.listaRolAplicacionRecursoChild) {
            this.recursoService.buscarRecursoPorCodigo(ele.codigoRecurso).subscribe(
              (respuesta) => {
                ele.recurso = respuesta['objeto'];
              }
            )
            this.rolAplicacionService.buscarRolAplicacionPorCodigo(ele.codigoRolAplicacion).subscribe(
              (respuesta) => {
                ele.rolAplicacion = respuesta['objeto'];
              }
            )
          }
          resolve(response);
        },
        error: (error) => {
          console.log(error);
          rejects("Error");
        }
      });
    })
  }

  addRegistroUsuarioAplicacion() {
    this.listaUsuarioAplicacion = [];

    //if (this.formUsuarioRolAplicacion?.valid) {
    let usuarioRolAplicacionTemp = this.formUsuarioRolAplicacion.value;
    this.usuarioAplicacion = new UsuarioAplicacion({
      codigo: 0,
      codUsuario: this.codUsuarioChild,
      codAplicacion: usuarioRolAplicacionTemp.aplicacion?.codigo,
      estado: 'A',
      fechaAsignacion: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
      fechaFinalizacion: "",
    });
    //}

    // Verificar si viene desde Editar o ya tiene registro de Usuario & Aplicación
    if (this.rolAplicacionRecursoEditar || this.codUsuarioAplicacionChild != undefined) {
      this.usuarioAplicacion['data'].codigo = this.codUsuarioAplicacionChild;
      this.usuarioRolAplicacionService.guardarUsuarioAplicacion(this.usuarioAplicacion['data']).subscribe({
        next: async (response) => {
          //this.listarRolAplicacionRecursoPorRolAplicacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
          // También adicionar registro en Usuario Rol Aplicacion:
          this.addRegistroUsuarioRolAplicacion();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.usuarioRolAplicacionService.guardarUsuarioAplicacion(this.usuarioAplicacion['data']).subscribe({
        next: async (response) => {
          //this.listarRolAplicacionRecursoPorRolAplicacion();
          this.mensajeService.mensajeCorrecto('Se ha agregado el registro correctamente...');
          this.parentDetail.closeDetail();
          // También adicionar registro en Usuario Rol Aplicacion:
          this.addRegistroUsuarioRolAplicacion();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al agregar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    }
  }

  addRegistroUsuarioRolAplicacion() {
    //if (this.formUsuarioRolAplicacion?.valid) {
    let usuarioRolAplicacionTemp = this.formUsuarioRolAplicacion.value;
    this.usuarioRolAplicacion = new UsuarioRolAplicacion({
      codigo: 0,
      codUsuario: this.codUsuarioChild,
      codRolAplicacion: usuarioRolAplicacionTemp.rolAplicacion?.codigo,
      fechaInicial: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
      fechaFinal: "",
      estado: 'A',
    });
    //}

    // Verificar si viene desde Editar
    if (this.rolAplicacionRecursoEditar || this.codUsuarioRolAplicacionChild != undefined) {
      this.usuarioRolAplicacion['data'].codigo = this.codUsuarioRolAplicacionChild;
      this.usuarioRolAplicacionService.guardarUsuarioRolAplicacion(this.usuarioRolAplicacion['data']).subscribe({
        next: (response) => {
          //this.listarRolAplicacionRecursoPorRolAplicacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.usuarioRolAplicacionService.guardarUsuarioRolAplicacion(this.usuarioRolAplicacion['data']).subscribe({
        next: async (response) => {
          //this.listarRolAplicacionRecursoPorRolAplicacion();
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

  updateAllComplete() {

  }

  closeDetail($event) {
    this.close.emit($event);
  }

  compararAplicacion(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }

  compararRolAplicacion(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }

  compararRolAplicacionRecurso(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }
}
