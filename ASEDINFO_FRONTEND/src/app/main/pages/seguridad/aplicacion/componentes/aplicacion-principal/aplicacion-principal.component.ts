import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { AplicacionService } from '../../servicios/aplicacion.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-aplicacion-principal',
  templateUrl: './aplicacion-principal.component.html',
  styleUrls: ['./aplicacion-principal.component.scss']
})

export class AplicacionPrincipalComponent implements OnInit {
  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;
  
  /*VARIABLES*/
  public mensaje: string;
  
  /*LISTAS*/
  public listaAplicacion: Aplicacion[] = [];
  
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
  public aplicacionSeleccionado: Aplicacion;
  
  /*CONSTRUCTOR*/
  constructor(
  /*Servicios*/
    private readonly aplicacionService: AplicacionService,
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
    this.listarAplicacionActivo();
  }

  listarAplicacionActivo() {
    this.aplicacionService.listarAplicacionActivo().subscribe(
      (respuesta) => {
        this.listaAplicacion = respuesta['listado'];
        if (this.listaAplicacion.length < this.itemsRegistros) {
          this.page = 1;
        }
      }
    );
  }

  listarAplicacionActivoActualizada(event) {
    this.listaAplicacion = event;
  }

  openDetail() {
    this.showDetail = true;
  }

  openEditarDetail(aplicacion: Aplicacion) {
    this.aplicacionSeleccionado = aplicacion;
    if (this.listaAplicacion.length < this.itemsRegistros) {
      this.page = 1;
    }
    this.showDetail = true;
  }

  openRemoverDetail(aplicacion: Aplicacion) {
    Swal
    .fire({
        title: "Eliminar Registro",
        text: "¿Quieres borrar el registro?'",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
    .then(resultado => {
        if (resultado.value) {
            // Hicieron click en "Sí, eliminar"
            this.aplicacionService.eliminarAplicacionPorId(aplicacion.codigo).subscribe({
              next: (response) => {
                this.listarAplicacionActivo();
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

  closeDetail($event) {
    this.showDetail = $event;
    this.aplicacionSeleccionado = null;
  }

}
