import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/main/pages/compartidos/modelos/Sede';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { SedeService } from '../../../servicios/sede.service';
import { DetailComponent } from '../../detail/detail.component';

@Component({
  selector: 'app-form-sede',
  templateUrl: './form-sede.component.html',
  styleUrls: ['./form-sede.component.scss']
})

export class FormSedeComponent implements OnInit {
  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaSede: EventEmitter<any>;
  
  /*INPUT RECIBEN*/
  @Input() listaSedeChild: any;
  @Input() sedeEditar: Sede;

  /*MODALES*/
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;
  
  /*VARIABLES*/
  public showDetail: boolean;
  private currentUser: any;

  /*FORMULARIOS*/
  public formSede: FormGroup;

  /*OBJETOS*/
  public sede: Sede;
  public listaSedeSuperior: Sede[];

  /*CONSTRUCTOR*/
  constructor(
    private sedeService: SedeService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.close = new EventEmitter<boolean>();
    this.listaSede = new EventEmitter<any>();
    this.showDetail = true;
  }

  ngOnInit() {
    this.listarSedeSuperior();
    if (this.sedeEditar) {
      this.formSede = this.formBuilder.group({
        nombre: new FormControl(this.sedeEditar.nombre, Validators.required),
        descripcion: new FormControl(this.sedeEditar.descripcion, Validators.required),
        nemonico: new FormControl(this.sedeEditar.nemonico, Validators.required),
        sedeSuperior: new FormControl(this.sedeEditar.sedeSuperior),
      })
    } else {
      this.formSede = this.formBuilder.group({
        nombre: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required),
        nemonico: new FormControl('', Validators.required), 
        sedeSuperior: new FormControl(''),
      })
    }
  }

  async listarSedeActivoAsync() {
    this.sedeService.listarSedeActivo().subscribe(
      (respuesta) => {
        this.listaSedeChild = respuesta['listado']
        for (const ele of this.listaSedeChild) {
          if (ele.codigoSedeSuperior != null) {
            this.sedeService.buscarSedePorCodigo(ele.codigoSedeSuperior).subscribe(
              (respuesta) => {
                ele.sedeSuperior = respuesta['objeto'];
              }
            )
          }
        }
        this.listaSede.emit(this.listaSedeChild);
      }
    );
  }

  listarSedeSuperior() {
    this.sedeService.listarSedeSuperior().subscribe({
      next: (response) => {
        this.listaSedeSuperior = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  addRegistro() {
    if (this.formSede?.valid) {
      let sedeTemp = this.formSede.value;
      let codigoSedeSuperior = 0;
      if (sedeTemp.sedeSuperior != "") {
        codigoSedeSuperior = sedeTemp.sedeSuperior?.codigo;
      }
      this.sede = new Sede({
        codigo: 0,
        nombre: sedeTemp.nombre,
        descripcion: sedeTemp.descripcion,
        nemonico: sedeTemp.nemonico,
        estado: 'A',
        codigoSedeSuperior: codigoSedeSuperior,
      });
    }

    if (this.sedeEditar) {
      this.sede['data'].codigo = this.sedeEditar.codigo;
      this.sedeService.guardarSede(this.sede['data']).subscribe({
        next: (response) => {
          this.listarSedeActivoAsync();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.sedeService.guardarSede(this.sede['data']).subscribe({
        next: async (response) => {
          this.listarSedeActivoAsync();
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

  compararSedeSuperior(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }

  get nombreField() {
    return this.formSede.get('nombre');
  }
  get descripcionField() {
    return this.formSede.get('descripcion');
  }
  get nemonicoField() {
    return this.formSede.get('nemonico');
  }
}
