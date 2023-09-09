import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { RolAplicacion } from 'app/main/pages/compartidos/modelos/RolAplicacion';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/seguridad/rolAplicacion/componentes/detail/detail.component';
import { RolAplicacionService } from '../../../servicios/rolAplicacion.service';
import { AplicacionService } from 'app/main/pages/seguridad/aplicacion/servicios/aplicacion.service';

@Component({
  selector: 'app-form-rolAplicacion',
  templateUrl: './form-rolAplicacion.component.html',
  styleUrls: ['./form-rolAplicacion.component.scss']
})
export class FormRolAplicacionComponent implements OnInit {
  /*SPINNER*/
  public load_btn: boolean;
  
  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaRolAplicacion: EventEmitter<any>;

  /*INPUT RECIBEN*/
  @Input() listaRolAplicacionChild: any;
  @Input() rolAplicacionEditar: RolAplicacion;
  @Input() codigoChild: number;
  @Input() codAplicacionChild: number;
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
  public formRolAplicacion: FormGroup;

  /*OBJETOS*/
  public rolAplicacion: RolAplicacion;
  public listaRolAplicacionPadre: RolAplicacion[];
  
  /*LISTAS*/
  listaRolSeguridad = [
    { nombre: "ADMINISTRADOR_GENERAL" },
    { nombre: "ADMINISTRADOR_APLICACION" },
    { nombre: "ADMINISTRADOR_OPERATIVO" },
  ];
  
  /*CONSTRUCTOR*/
  constructor(
    private rolAplicacionService: RolAplicacionService,
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
    this.listaRolAplicacion = new EventEmitter<any>();
    this.showDetail = true;

  }

  ngOnInit() {
    if (this.rolAplicacionEditar) {
      this.formRolAplicacion = this.formBuilder.group({
        nombreAplicacion: new FormControl(this.nombreAplicacionChild),
        nombreRol: new FormControl(this.rolAplicacionEditar.nombreRol, Validators.required),
        descripcionRol: new FormControl(this.rolAplicacionEditar.descripcionRol, Validators.required),
        enumRolSeguridad: new FormControl(this.rolAplicacionEditar.enumRolSeguridad),        
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formRolAplicacion = this.formBuilder.group({
        nombreAplicacion: new FormControl(this.nombreAplicacionChild),
        nombreRol: new FormControl('', Validators.required),
        descripcionRol: new FormControl('', Validators.required),
        enumRolSeguridad: new FormControl('', Validators.required),
      })
    }
  }
  
  async listarRolAplicacionPorCodAplicacion() {
    this.rolAplicacionService.listarRolAplicacionPorCodAplicacion(this.codAplicacionChild).subscribe(
      (respuesta) => {
        this.listaRolAplicacionChild = respuesta['listado']
        for (const ele of this.listaRolAplicacionChild) {
          this.aplicacionService.buscarAplicacionPorCodigo(ele.codAplicacion).subscribe(
            (respuesta) => {
              ele.aplicacion = respuesta['objeto'];
            }
          )
        }
        this.listaRolAplicacion.emit(this.listaRolAplicacionChild);
      }
    );
  }

  addRegistro() {
    if (this.formRolAplicacion?.valid) {
      let rolAplicacionTemp = this.formRolAplicacion.value;
      this.rolAplicacion = new RolAplicacion({
        codigo: 0,
        nombreRol: rolAplicacionTemp.nombreRol,
        descripcionRol: rolAplicacionTemp.descripcionRol,
        estadoRol: 'A',
        enumRolSeguridad: rolAplicacionTemp.enumRolSeguridad,
        codAplicacion: this.codAplicacionChild,
      });
    }
    if (this.rolAplicacionEditar) {
      this.rolAplicacion['data'].codigo = this.rolAplicacionEditar.codigo;
      this.rolAplicacionService.guardarRolAplicacion(this.rolAplicacion['data']).subscribe({
        next: (response) => {
          this.listarRolAplicacionPorCodAplicacion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.rolAplicacionService.guardarRolAplicacion(this.rolAplicacion['data']).subscribe({
        next: async (response) => {
          this.listarRolAplicacionPorCodAplicacion();
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

  compararRolAplicacionPadre(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
  }

  get nombreRolField() {
    return this.formRolAplicacion.get('nombreRol');
  }
  get descripcionRolField() {
    return this.formRolAplicacion.get('descripcionRol');
  }
}
