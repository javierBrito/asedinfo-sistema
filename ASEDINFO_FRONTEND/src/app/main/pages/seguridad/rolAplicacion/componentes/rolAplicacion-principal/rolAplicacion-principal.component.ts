import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginAplicacion } from 'app/auth/models/loginAplicacion';
import { Sede } from 'app/auth/models/sede';
import { RolAplicacion } from 'app/main/pages/compartidos/modelos/RolAplicacion';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { RolAplicacionService } from '../../servicios/rolAplicacion.service';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { AplicacionService } from 'app/main/pages/seguridad/aplicacion/servicios/aplicacion.service';

@Component({
  selector: 'app-rolAplicacion-principal',
  templateUrl: './rolAplicacion-principal.component.html',
  styleUrls: ['./rolAplicacion-principal.component.scss']
})
export class RolAplicacionPrincipalComponent implements OnInit {
  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;

  /*VARIABLES*/
  public codigo: number;
  public institucion: any;
  public codAplicacion = null;
  public nombreAplicacion: string;

  /*LISTAS*/
  public listaRolAplicacion: RolAplicacion[] = [];
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
  public rolAplicacionSeleccionado: RolAplicacion;

  /*FORMULARIOS*/
  public formRolAplicacion: FormGroup;

  /*CONSTRUCTOR */
  constructor(
    /*Servicios*/
    private readonly rolAplicacionService: RolAplicacionService,
    private readonly aplicacionService: AplicacionService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
  ) {
    this.codigo = 0;
    this.codAplicacion = 0;
    this.itemsRegistros = 5;
    this.page = 1;
    this.showDetail = false;
    this.selectedTab = 0;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.sede = this.currentUser.sede;
  }

  ngOnInit() {
    this.listarAplicacion();
    this.formRolAplicacion = this.formBuilder.group({
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

  listarRolAplicacionPorCodAplicacion() {
    let rolAplicacionTemp = this.formRolAplicacion.value;
    this.codAplicacion = rolAplicacionTemp.aplicacion.codigo;
    this.nombreAplicacion = rolAplicacionTemp.aplicacion.nombre;
    this.rolAplicacionService.listarRolAplicacionPorCodAplicacion(this.codAplicacion).subscribe(
      (respuesta) => {
        this.listaRolAplicacion = respuesta['listado'];
        for (const ele of this.listaRolAplicacion) {
          this.aplicacionService.buscarAplicacionPorCodigo(ele.codAplicacion).subscribe(
            (respuesta) => {
              ele.aplicacion = respuesta['objeto'];
            }
          )
        }
        // Ordenar lista por codigo
        //this.listaRolAplicacion.sort((firstItem, secondItem) => firstItem.aplicacion.codigo - secondItem.aplicacion.codigo);

      }
    );
  }

  listaRolAplicacionActualizada(event) {
    this.listaRolAplicacion = event;
  }

  openDetail(codjornada) {
    this.showDetail = true;
  }

  openEditarDetail(rolAplicacion: RolAplicacion) {
    this.rolAplicacionSeleccionado = rolAplicacion;
    this.showDetail = true;
  }

  openRemoverDetail(rolAplicacion: RolAplicacion) {
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
          this.rolAplicacionService.eliminarRolAplicacionPorId(rolAplicacion.codigo).subscribe({
            next: (response) => {
              this.listarRolAplicacionPorCodAplicacion();
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
    this.rolAplicacionSeleccionado = null;
  }

}
