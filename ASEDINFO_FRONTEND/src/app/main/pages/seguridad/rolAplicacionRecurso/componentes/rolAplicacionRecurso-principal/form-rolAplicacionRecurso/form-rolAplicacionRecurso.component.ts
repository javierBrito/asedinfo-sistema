import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { RolAplicacionRecurso } from 'app/main/pages/compartidos/modelos/RolAplicacionRecurso';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/seguridad/rolAplicacionRecurso/componentes/detail/detail.component';
import { RolAplicacionRecursoService } from '../../../servicios/rolAplicacionRecurso.service';
import { AplicacionService } from 'app/main/pages/seguridad/aplicacion/servicios/aplicacion.service';
import { Recurso } from 'app/main/pages/compartidos/modelos/Recurso';
import { RolAplicacionService } from 'app/main/pages/seguridad/rolAplicacion/servicios/rolAplicacion.service';
import { RolAplicacion } from 'app/main/pages/compartidos/modelos/RolAplicacion';
import { RecursoService } from 'app/main/pages/seguridad/recurso/servicios/recurso.service';

@Component({
  selector: 'app-form-rolAplicacionRecurso',
  templateUrl: './form-rolAplicacionRecurso.component.html',
  styleUrls: ['./form-rolAplicacionRecurso.component.scss']
})
export class FormRolAplicacionRecursoComponent implements OnInit {
  /*SPINNER*/
  public load_btn: boolean;
  
  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaRolAplicacionRecurso: EventEmitter<any>;

  /*INPUT RECIBEN*/
  @Input() listaRolAplicacionRecursoChild: any;
  @Input() rolAplicacionRecursoEditar: RolAplicacionRecurso;
  @Input() codigoChild: number;
  @Input() codigoAplicacionChild: number;
  @Input() nombreAplicacionChild: string;

  /*MODALES*/
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;
  
  /*VARIABLES */
  public showDetail: boolean;
  private amieRegex: string;
  private currentUser: any;
  private sede: Sede;
  
  /*FORMULARIOS*/
  public formRolAplicacionRecurso: FormGroup;

  /*OBJETOS*/
  public rolAplicacionRecurso: RolAplicacionRecurso;
  public recurso: Recurso;
  public listaRolAplicacion: RolAplicacion[];
  public listaRecurso: Recurso[];
  
  /*LISTAS*/
  listaRolSeguridad = [
    { nombre: "ADMINISTRADOR_GENERAL" },
    { nombre: "ADMINISTRADOR_APLICACION" },
    { nombre: "ADMINISTRADOR_OPERATIVO" },
  ];
  
  /*CONSTRUCTOR*/
  constructor(
    private rolAplicacionRecursoService: RolAplicacionRecursoService,
    private rolAplicacionService: RolAplicacionService,
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
    this.listarRolAplicacionPorAplicacion();
    this.listarRecursoPorAplicacion();
    if (this.rolAplicacionRecursoEditar) {
      this.formRolAplicacionRecurso = this.formBuilder.group({
        nombreAplicacion: new FormControl(this.nombreAplicacionChild),
        rolAplicacion: new FormControl(this.rolAplicacionRecursoEditar.rolAplicacion, Validators.required),
        recurso: new FormControl(this.rolAplicacionRecursoEditar.recurso, Validators.required),
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formRolAplicacionRecurso = this.formBuilder.group({
        nombreAplicacion: new FormControl(this.nombreAplicacionChild),
        rolAplicacion: new FormControl('', Validators.required),
        recurso: new FormControl('', Validators.required),
      })
    }
  }

  listarRolAplicacionPorAplicacion() {
    this.rolAplicacionService.listarRolAplicacionPorCodAplicacion(this.codigoAplicacionChild).subscribe({
      next: (response) => {
        this.listaRolAplicacion = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  listarRecursoPorAplicacion() {
    this.recursoService.listarRecursoPorAplicacion(this.codigoAplicacionChild).subscribe({
      next: (response) => {
        this.listaRecurso = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  async listarRolAplicacionRecursoPorAplicacion() {
    this.rolAplicacionRecursoService.listarRolAplicacionRecursoPorAplicacion(this.codigoAplicacionChild).subscribe(
      (respuesta) => {
        this.listaRolAplicacionRecursoChild = respuesta['listado']
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
        this.listaRolAplicacionRecurso.emit(this.listaRolAplicacionRecursoChild);
      }
    );
  }

  addRegistro() {
    if (this.formRolAplicacionRecurso?.valid) {
      let rolAplicacionRecursoTemp = this.formRolAplicacionRecurso.value;
      this.rolAplicacionRecurso = new RolAplicacionRecurso({
        codigo: 0,
        estado: 'A',
        codigoRolAplicacion: rolAplicacionRecursoTemp.rolAplicacion.codigo,
        codigoRecurso: rolAplicacionRecursoTemp.recurso.codigo,
      });
    }
    if (this.rolAplicacionRecursoEditar) {
      this.rolAplicacionRecurso['data'].codigo = this.rolAplicacionRecursoEditar.codigo;
      this.rolAplicacionRecursoService.guardarRolAplicacionRecurso(this.rolAplicacionRecurso['data']).subscribe({
        next: (response) => {
          this.listarRolAplicacionRecursoPorAplicacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.rolAplicacionRecursoService.guardarRolAplicacionRecurso(this.rolAplicacionRecurso['data']).subscribe({
        next: async (response) => {
          this.listarRolAplicacionRecursoPorAplicacion();
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

  compararRecurso(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }

  compararRolAplicacion(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }
}
