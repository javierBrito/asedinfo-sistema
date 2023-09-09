import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Sede } from 'app/main/pages/compartidos/modelos/Sede';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { SedeService } from '../../servicios/sede.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-sede-principal',
  templateUrl: './sede-principal.component.html',
  styleUrls: ['./sede-principal.component.scss']
})

export class SedePrincipalComponent implements OnInit {
  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;

  /*VARIABLES*/
  public mensaje: string;

  /*LISTAS*/
  public listaSede: Sede[] = [];

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
  public sedeSeleccionado: Sede;
  public sedeSuperior: Sede;

  /*CONSTRUCTOR*/
  constructor(
    /*Servicios*/
    private readonly sedeService: SedeService,
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
    this.listarSedeActivo();
  }

  listarSedeActivo() {
    this.sedeService.listarSedeActivo().subscribe(
      (respuesta) => {
        this.listaSede = respuesta['listado'];
        if (this.listaSede.length < this.itemsRegistros) {
          this.page = 1;
        }
        for (const ele of this.listaSede) {
          if (ele.codigoSedeSuperior != null) {
            this.sedeService.buscarSedePorCodigo(ele.codigoSedeSuperior).subscribe(
              (respuesta) => {
                ele.sedeSuperior = respuesta['objeto'];
              }
            )
          }
        }
        // Ordenar lista por codigo
        //this.listaSede.sort((firstItem, secondItem) => firstItem.sede.codigo - secondItem.sede.codigo);
      }
    );
  }

  listarSedeActivoActualizada(event) {
    this.listaSede = event;
  }

  openDetail() {
    this.showDetail = true;
  }

  openEditarDetail(sede: Sede) {
    this.sedeSeleccionado = sede;
    if (this.listaSede.length < this.itemsRegistros) {
      this.page = 1;
    }
    this.showDetail = true;
  }

  openRemoverDetail(sede: Sede) {
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
          this.sedeService.eliminarSedePorId(sede.codigo).subscribe({
            next: (response) => {
              this.listarSedeActivo();
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
    this.sedeSeleccionado = null;
  }

}
