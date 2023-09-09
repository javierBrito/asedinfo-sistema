import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginAplicacion } from 'app/auth/models/loginAplicacion';
import { Sede } from 'app/auth/models/sede';
import { Recurso } from 'app/main/pages/compartidos/modelos/Recurso';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { RecursoService } from '../../servicios/recurso.service';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { AplicacionService } from 'app/main/pages/seguridad/aplicacion/servicios/aplicacion.service';

@Component({
  selector: 'app-recurso-principal',
  templateUrl: './recurso-principal.component.html',
  styleUrls: ['./recurso-principal.component.scss']
})
export class RecursoPrincipalComponent implements OnInit {
  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;

  /*VARIABLES*/
  public codigo: number;
  public institucion: any;
  public codigoAplicacion = null;
  public nombreAplicacion: string;

  /*LISTAS*/
  public listaRecurso: Recurso[] = [];
  public listaAplicacion: Aplicacion[] = [];
  public listaPeriodoRegAniLec: any[];

  /*TABS*/
  public selectedTab: number;

  /*OBJETOS*/
  private currentUser: LoginAplicacion;
  private sede: Sede;

  /*DETAIL*/
  public showDetail: boolean;

  /*PAGINACION*/
  public page: number;
  public itemsRegistros: number;

  /*OBJETOS*/
  public recursoSeleccionado: Recurso;

  /*FORMULARIOS*/
  public formRecurso: FormGroup;

  /*CONSTRUCTOR */
  constructor(
    /*Servicios*/
    private readonly recursoService: RecursoService,
    private readonly aplicacionService: AplicacionService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
  ) {
    this.codigo = 0;
    this.codigoAplicacion = 0;
    this.itemsRegistros = 5;
    this.page = 1;
    this.showDetail = false;
    this.selectedTab = 0;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.sede = this.currentUser.sede;
  }

  ngOnInit() {
    this.listarAplicacion();
    this.formRecurso = this.formBuilder.group({
      aplicacion: new FormControl('', Validators.required)
    })
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

  listarRecurso() {
    let recursoTemp = this.formRecurso.value;
    this.codigoAplicacion = recursoTemp.aplicacion.codigo;
    this.nombreAplicacion = recursoTemp.aplicacion.nombre;
    this.recursoService.listarRecursoPorAplicacion(this.codigoAplicacion).subscribe(
      (respuesta) => {
        this.listaRecurso = respuesta['listado'];
        if (this.listaRecurso.length < this.itemsRegistros) {
          this.page = 1;
        }
        for (const ele of this.listaRecurso) {
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
        // Ordenar lista por codigo
        //this.listaRecurso.sort((firstItem, secondItem) => firstItem.aplicacion.codigo - secondItem.aplicacion.codigo);
      }
    );
  }

  listaRecursoActualizada(event) {
    this.listaRecurso = event;
  }

  openDetail(codjornada) {
    this.showDetail = true;
  }

  openEditarDetail(recurso: Recurso) {
    this.recursoSeleccionado = recurso;
    this.showDetail = true;
  }

  openRemoverDetail(recurso: Recurso) {
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
          this.recursoService.eliminarRecursoPorId(recurso.codigo).subscribe({
            next: (response) => {
              this.listarRecurso();
              this.mensajeService.mensajeCorrecto('El registro ha sido borrada con éxito...');
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

  compararAplicacion(o1, o2) {
    return o1 === undefined || o2 === undefined ? false : o1.codigo === o2.codigo;
  }
  
  closeDetail($event) {
    this.showDetail = $event;
    this.recursoSeleccionado = null;
  }

}
