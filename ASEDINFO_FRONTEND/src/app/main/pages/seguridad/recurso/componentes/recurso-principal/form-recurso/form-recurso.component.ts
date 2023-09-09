import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { Recurso } from 'app/main/pages/compartidos/modelos/Recurso';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/seguridad/recurso/componentes/detail/detail.component';
import { RecursoService } from '../../../servicios/recurso.service';
import { AplicacionService } from 'app/main/pages/seguridad/aplicacion/servicios/aplicacion.service';

@Component({
  selector: 'app-form-recurso',
  templateUrl: './form-recurso.component.html',
  styleUrls: ['./form-recurso.component.scss']
})
export class FormRecursoComponent implements OnInit {
  /*SPINNER*/
  public load_btn: boolean;
  
  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaRecurso: EventEmitter<any>;

  /*INPUT RECIBEN*/
  @Input() listaRecursoChild: any;
  @Input() recursoEditar: Recurso;
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
  public formRecurso: FormGroup;

  /*OBJETOS*/
  public recurso: Recurso;
  public listaRecursoPadre: Recurso[];
  
  /*CONSTRUCTOR*/
  constructor(
    private recursoService: RecursoService,
    private aplicacionService: AplicacionService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
    private mensajeIzi: MensajesIziToastService,
  ) {
    this.load_btn = false;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.sede = this.currentUser.sede;
    //this.amieRegex = this.patternAmie(this.sede.nombre);
    this.close = new EventEmitter<boolean>();
    this.listaRecurso = new EventEmitter<any>();
    this.showDetail = true;

  }

  ngOnInit() {
    this.listarRecursoPadre();
    if (this.recursoEditar) {
      this.formRecurso = this.formBuilder.group({
        nombreAplicacion: new FormControl(this.nombreAplicacionChild),
        nombre: new FormControl(this.recursoEditar.nombre, Validators.required),
        descripcion: new FormControl(this.recursoEditar.descripcion, Validators.required),
        url: new FormControl(this.recursoEditar.url, Validators.required),
        nivel: new FormControl(this.recursoEditar.nivel, Validators.required),
        recursoPadre: new FormControl(this.recursoEditar.recursoPadre),
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formRecurso = this.formBuilder.group({
        nombreAplicacion: new FormControl(this.nombreAplicacionChild),
        nombre: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required),
        url: new FormControl('', Validators.required),
        nivel: new FormControl('', Validators.required),
        recursoPadre: new FormControl(''),
      })
    }
  }

  listarRecursoPadre() {
    this.recursoService.listarRecursoPadre(this.codigoAplicacionChild).subscribe({
      next: (response) => {
        this.listaRecursoPadre = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  async listarRecursoPorAplicacion() {
    this.recursoService.listarRecursoPorAplicacion(this.codigoAplicacionChild).subscribe(
      (respuesta) => {
        this.listaRecursoChild = respuesta['listado']
        for (const ele of this.listaRecursoChild) {
          this.aplicacionService.buscarAplicacionPorCodigo(ele.codigoAplicacion).subscribe(
            (respuesta) => {
              ele.aplicacion = respuesta['objeto'];
            }
          )
          if (ele.codigoPadre != null && ele.codigoPadre != 0) {
            this.recursoService.buscarRecursoPorCodigo(ele.codigoPadre).subscribe(
              (respuesta) => {
                ele.recursoPadre = respuesta['objeto'];
              }
            )
          }
        }
        this.listaRecurso.emit(this.listaRecursoChild);
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
    if (this.formRecurso?.valid) {
      let recursoTemp = this.formRecurso.value;
      let codigoPadre = 0;
      if (recursoTemp?.recursoPadre != "" && recursoTemp?.recursoPadre != null) {
        codigoPadre = recursoTemp?.recursoPadre?.codigo;
      }
      this.recurso = new Recurso({
        codigo: 0,
        nombre: recursoTemp?.nombre,
        descripcion: recursoTemp?.descripcion,
        url: recursoTemp?.url,
        nivel: recursoTemp?.nivel,
        estado: 'A',
        codigoAplicacion: this.codigoAplicacionChild,
        codigoPadre: codigoPadre,
      });
    }
    if (this.recursoEditar) {
      this.recurso['data'].codigo = this.recursoEditar.codigo;
      this.recursoService.guardarRecurso(this.recurso['data']).subscribe({
        next: (response) => {
          this.listarRecursoPorAplicacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.recursoService.guardarRecurso(this.recurso['data']).subscribe({
        next: async (response) => {
          this.listarRecursoPorAplicacion();
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

  compararRecursoPadre(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }

  get nombreField() {
    return this.formRecurso.get('nombre');
  }
  get descripcionField() {
    return this.formRecurso.get('descripcion');
  }
  get urlField() {
    return this.formRecurso.get('url');
  }
  get nivelField() {
    return this.formRecurso.get('nivel');
  }
}
