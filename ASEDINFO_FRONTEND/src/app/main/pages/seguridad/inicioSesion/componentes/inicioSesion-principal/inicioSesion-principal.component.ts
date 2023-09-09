import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { InicioSesion } from 'app/main/pages/compartidos/modelos/InicioSesion';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { InicioSesionService } from '../../servicios/inicioSesion.service';
import { DetailComponent } from '../detail/detail.component';
import dayjs from "dayjs";

@Component({
  selector: 'app-inicioSesion-principal',
  templateUrl: './inicioSesion-principal.component.html',
  styleUrls: ['./inicioSesion-principal.component.scss']
})

export class InicioSesionPrincipalComponent implements OnInit {
  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;
  
  /*VARIABLES*/
  public mensaje: string;
  
  /*LISTAS*/
  public listaInicioSesion: InicioSesion[] = [];
  
  /*TABS*/
  public selectedTab: number;
  
  /*DETAIL*/
  public showDetail: boolean;
  
  /*PAGINACION*/
  public page: number;
  public pageVespertina: number;
  public pageNocturna: number;
  public itemsRegistros: number;

  /*OBJETOS*/
  public inicioSesionSeleccionado: InicioSesion;
  
  /*CONSTRUCTOR*/
  constructor(
  /*Servicios*/
    private readonly inicioSesionService: InicioSesionService,
    private readonly mensajeService: MensajeService,
  ) {
    this.itemsRegistros = 5;
    this.page = 1;
    this.pageVespertina = 1;
    this.pageNocturna = 1;
    this.showDetail = false;
    this.selectedTab = 0;
  }

  ngOnInit() {
    this.listarTodosInicioSesion();
  }

  listarTodosInicioSesion() {
    this.inicioSesionService.listarTodosInicioSesion().subscribe(
      (respuesta) => {
        this.listaInicioSesion = respuesta['listado'];
        if (this.listaInicioSesion.length < this.itemsRegistros) {
          this.page = 1;
        }
        for (const registro of this.listaInicioSesion) {
          registro.fecha = dayjs(registro.fecha).format("YYYY-MM-DD")
        }
      }
    );
  }

  listarInicioSesionActivoActualizada(event) {
    this.listaInicioSesion = event;
  }

  openDetail() {
    this.showDetail = true;
  }

  openEditarDetail(inicioSesion: InicioSesion) {
    this.inicioSesionSeleccionado = inicioSesion;
    if (this.listaInicioSesion.length < this.itemsRegistros) {
      this.page = 1;
    }
    this.showDetail = true;
  }

  closeDetail($event) {
    this.showDetail = $event;
    this.inicioSesionSeleccionado = null;
  }

}
