import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginAplicacion } from 'app/auth/models/loginAplicacion';
import { Sede } from 'app/auth/models/sede';
import { RolAplicacionRecurso } from 'app/main/pages/compartidos/modelos/RolAplicacionRecurso';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { RolAplicacionRecursoService } from '../../servicios/rolAplicacionRecurso.service';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { AplicacionService } from 'app/main/pages/seguridad/aplicacion/servicios/aplicacion.service';
import { RolAplicacion } from 'app/main/pages/compartidos/modelos/RolAplicacion';
import { Recurso } from 'app/auth/models/recurso.model';
import { RolAplicacionService } from 'app/main/pages/seguridad/rolAplicacion/servicios/rolAplicacion.service';
import { RecursoService } from 'app/main/pages/seguridad/recurso/servicios/recurso.service';

@Component({
  selector: 'app-rolAplicacionRecurso-principal',
  templateUrl: './rolAplicacionRecurso-principal.component.html',
  styleUrls: ['./rolAplicacionRecurso-principal.component.scss']
})
export class RolAplicacionRecursoPrincipalComponent implements OnInit {
  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;

  /*VARIABLES*/
  public codigo: number;
  public institucion: any;
  public codigoAplicacion: number;
  public nombreAplicacion: string;

  /*LISTAS*/
  public listaRolAplicacionRecurso: RolAplicacionRecurso[] = [];
  public listaAplicacion: Aplicacion[] = [];
  public listaRolAplicacion: RolAplicacion[] = [];
  public listaRecurso: Recurso[] = [];
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
  public rolAplicacionRecursoSeleccionado: RolAplicacionRecurso;

  /*FORMULARIOS*/
  public formRolAplicacionRecurso: FormGroup;

  /*CONSTRUCTOR */
  constructor(
    /*Servicios*/
    private readonly rolAplicacionRecursoService: RolAplicacionRecursoService,
    private readonly aplicacionService: AplicacionService,
    private readonly rolAplicacionService: RolAplicacionService,
    private readonly recursoService: RecursoService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
  ) {
    this.codigo = 0;
    this.codigoAplicacion = 0;
    this.nombreAplicacion = "";
    this.itemsRegistros = 5;
    this.page = 1;
    this.showDetail = false;
    this.selectedTab = 0;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.sede = this.currentUser.sede;
  }

  ngOnInit() {
    this.listarAplicacionActivo();
    this.formRolAplicacionRecurso = this.formBuilder.group({
      aplicacion: new FormControl('', Validators.required)
    })
  }

  listarAplicacionActivo() {
    this.aplicacionService.listarAplicacionActivo().subscribe({
      next: (response) => {
        this.listaAplicacion = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  async listarRolAplicacionRecursoPorAplicacion() {
    let rolAplicacionRecursoTemp = this.formRolAplicacionRecurso.value;
    this.codigoAplicacion = rolAplicacionRecursoTemp.aplicacion.codigo;
    this.nombreAplicacion = rolAplicacionRecursoTemp.aplicacion.nombre;
    this.rolAplicacionRecursoService.listarRolAplicacionRecursoPorAplicacion(this.codigoAplicacion).subscribe(
      (respuesta) => {
        this.listaRolAplicacionRecurso = respuesta['listado'];
        for (const ele of this.listaRolAplicacionRecurso) {
          this.rolAplicacionService.buscarRolAplicacionPorCodigo(ele.codigoRolAplicacion).subscribe(
            (respuesta) => {
              ele.rolAplicacion = respuesta['objeto'];
            }
          )
          this.recursoService.buscarRecursoPorCodigo(ele.codigoRecurso).subscribe(
            (respuesta) => {
              ele.recurso = respuesta['objeto'];
            }
          )
        }
        // Ordenar lista por codigo
        //this.listaRolAplicacionRecurso.sort((firstItem, secondItem) => firstItem.aplicacion.codigo - secondItem.aplicacion.codigo);

      }
    );
  }

  listaRolAplicacionRecursoActualizada(event) {
    this.listaRolAplicacionRecurso = event;
  }

  openDetail(codjornada) {
    this.showDetail = true;
  }

  openEditarDetail(rolAplicacionRecurso: RolAplicacionRecurso) {
    this.rolAplicacionRecursoSeleccionado = rolAplicacionRecurso;
    this.showDetail = true;
  }

  openRemoverDetail(rolAplicacionRecurso: RolAplicacionRecurso) {
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
          this.rolAplicacionRecursoService.eliminarRolAplicacionRecursoPorId(rolAplicacionRecurso.codigo).subscribe({
            next: (response) => {
              this.listarRolAplicacionRecursoPorAplicacion();
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
    this.rolAplicacionRecursoSeleccionado = null;
  }

}
