import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { AplicacionService } from '../../../servicios/aplicacion.service';
import { DetailComponent } from '../../detail/detail.component';

@Component({
  selector: 'app-form-aplicacion',
  templateUrl: './form-aplicacion.component.html',
  styleUrls: ['./form-aplicacion.component.scss']
})

export class FormAplicacionComponent implements OnInit {
  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaAplicacion: EventEmitter<any>;
  
  /*INPUT RECIBEN*/
  @Input() listaAplicacionChild: any;
  @Input() aplicacionEditar: Aplicacion;

  /*MODALES*/
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;
  
  /*VARIABLES*/
  public showDetail: boolean;
  private currentUser: any;

  /*FORMULARIOS*/
  public formAplicacion: FormGroup;

  /*OBJETOS*/
  public aplicacion: Aplicacion;
  public listaAplicacionAux: Aplicacion[];

  /*CONSTRUCTOR*/
  constructor(
    private aplicacionService: AplicacionService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.close = new EventEmitter<boolean>();
    this.listaAplicacion = new EventEmitter<any>();
    this.showDetail = true;
  }

  ngOnInit() {
    this.listarAplicacionActivo();
    if (this.aplicacionEditar) {
      this.formAplicacion = this.formBuilder.group({
        nombre: new FormControl(this.aplicacionEditar.nombre, Validators.required),
        descripcion: new FormControl(this.aplicacionEditar.descripcion, Validators.required),
        prefijo: new FormControl(this.aplicacionEditar.prefijo, Validators.required),
        tipo: new FormControl(this.aplicacionEditar.tipo, Validators.required),
        url: new FormControl(this.aplicacionEditar.url, Validators.required),
      })
    } else {
      this.formAplicacion = this.formBuilder.group({
        nombre: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required),
        prefijo: new FormControl('', Validators.required), 
        tipo: new FormControl('', Validators.required), 
        url: new FormControl('', Validators.required), 
      })
    }
  }

  async listarAplicacionActivoAsync() {
    this.aplicacionService.listarAplicacionActivo().subscribe(
      (respuesta) => {
        this.listaAplicacionChild = respuesta['listado']
        for (const ele of this.listaAplicacionChild) {
          this.aplicacionService.buscarAplicacionPorCodigo(ele.codigo).subscribe(
            (respuesta) => {
              ele.aplicacion = respuesta['objeto'];
            }
          )
        }
        this.listaAplicacion.emit(this.listaAplicacionChild);
      }
    );
  }

  listarAplicacionActivo() {
    this.aplicacionService.listarAplicacionActivo().subscribe({
      next: (response) => {
        this.listaAplicacionAux = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  addRegistro() {
    if (this.formAplicacion?.valid) {
      let aplicacionTemp = this.formAplicacion.value;
      this.aplicacion = new Aplicacion({
        //codigo: aplicacionTemp.codigo,
        nombre: aplicacionTemp.nombre,
        descripcion: aplicacionTemp.descripcion,
        prefijo: aplicacionTemp.prefijo,
        tipo: aplicacionTemp.tipo,
        url: aplicacionTemp.url,
        estado: 'A',
        seleccionada: false,
      });
    }

    if (this.aplicacionEditar) {
      this.aplicacion['data'].codigo = this.aplicacionEditar.codigo;
      this.aplicacionService.guardarAplicacion(this.aplicacion['data']).subscribe({
        next: (response) => {
          this.listarAplicacionActivoAsync();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.aplicacionService.guardarAplicacion(this.aplicacion['data']).subscribe({
        next: async (response) => {
          this.listarAplicacionActivoAsync();
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

  get nombreField() {
    return this.formAplicacion.get('nombre');
  }
  get descripcionField() {
    return this.formAplicacion.get('descripcion');
  }
  get prefijoField() {
    return this.formAplicacion.get('prefijo');
  }
  get tipoField() {
    return this.formAplicacion.get('tipo');
  }
  get urlField() {
    return this.formAplicacion.get('url');
  }
}
