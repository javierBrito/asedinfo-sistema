import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { InicioSesion } from 'app/main/pages/compartidos/modelos/InicioSesion';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { InicioSesionService } from '../../../servicios/inicioSesion.service';
import { DetailComponent } from '../../detail/detail.component';
import dayjs from "dayjs";

@Component({
  selector: 'app-form-inicioSesion',
  templateUrl: './form-inicioSesion.component.html',
  styleUrls: ['./form-inicioSesion.component.scss']
})

export class FormInicioSesionComponent implements OnInit {
  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaInicioSesion: EventEmitter<any>;
  
  /*INPUT RECIBEN*/
  @Input() listaInicioSesionChild: any;
  @Input() inicioSesionEditar: InicioSesion;

  /*MODALES*/
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;
  
  /*VARIABLES*/
  public showDetail: boolean;
  private currentUser: any;

  /*FORMULARIOS*/
  public formInicioSesion: FormGroup;

  /*OBJETOS*/
  public inicioSesion: InicioSesion;
  public listaInicioSesionAux: InicioSesion[];

  /*CONSTRUCTOR*/
  constructor(
    private inicioSesionService: InicioSesionService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.close = new EventEmitter<boolean>();
    this.listaInicioSesion = new EventEmitter<any>();
    this.showDetail = true;
  }

  ngOnInit() {
    this.listarTodosInicioSesion();
    if (this.inicioSesionEditar) {
      this.formInicioSesion = this.formBuilder.group({
        ip: new FormControl(this.inicioSesionEditar.ip, Validators.required),
        usuario: new FormControl(this.inicioSesionEditar.usuario, Validators.required),
        prefijoAplicacion: new FormControl(this.inicioSesionEditar.prefijoAplicacion, Validators.required),
        fecha: new FormControl(dayjs(this.inicioSesionEditar.fecha).format("YYYY-MM-DD"), Validators.compose([Validators.required, ,])),
      })
    } else {
      this.formInicioSesion = this.formBuilder.group({
        ip: new FormControl('', Validators.required),
        usuario: new FormControl('', Validators.required),
        prefijoAplicacion: new FormControl('', Validators.required), 
        fecha: new FormControl('', Validators.required),
      })
    }
  }

  async listarInicioSesionActivoAsync() {
    this.inicioSesionService.listarTodosInicioSesion().subscribe(
      (respuesta) => {
        this.listaInicioSesionChild = respuesta['listado']
        for (const ele of this.listaInicioSesionChild) {
          this.inicioSesionService.buscarInicioSesionPorCodigo(ele.codigo).subscribe(
            (respuesta) => {
              ele.inicioSesion = respuesta['objeto'];
            }
          )
        }
        this.listaInicioSesion.emit(this.listaInicioSesionChild);
      }
    );
  }

  listarTodosInicioSesion() {
    this.inicioSesionService.listarTodosInicioSesion().subscribe({
      next: (response) => {
        this.listaInicioSesionAux = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  addRegistro() {
    if (this.formInicioSesion?.valid) {
      let inicioSesionTemp = this.formInicioSesion.value;
      this.inicioSesion = new InicioSesion({
        ip: inicioSesionTemp.ip,
        usuario: inicioSesionTemp.usuario,
        prefijoAplicacion: inicioSesionTemp.prefijoAplicacion,
        fecha: dayjs(inicioSesionTemp.fecha).format("YYYY-MM-DD HH:mm:ss.SSS"),
      });
    }

    if (this.inicioSesionEditar) {
      this.inicioSesion['data'].codigo = this.inicioSesionEditar.codigo;
      this.inicioSesionService.guardarInicioSesion(this.inicioSesion['data']).subscribe({
        next: (response) => {
          this.listarInicioSesionActivoAsync();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.inicioSesionService.guardarInicioSesion(this.inicioSesion['data']).subscribe({
        next: async (response) => {
          this.listarInicioSesionActivoAsync();
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

  get ipField() {
    return this.formInicioSesion.get('ip');
  }
  get usuarioField() {
    return this.formInicioSesion.get('usuario');
  }
  get prefijoAplicacionField() {
    return this.formInicioSesion.get('prefijoAplicacion');
  }
  get fechaField() {
    return this.formInicioSesion.get('fecha');
  }
}
