import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginAplicacion } from 'app/auth/models/loginAplicacion';
import { Sede } from 'app/auth/models/sede';
import { Producto } from 'app/main/pages/compartidos/modelos/Producto';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { ProductoService } from '../../servicios/producto.service';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { MyValidators } from 'app/utils/validators';
import { SedeService } from 'app/main/pages/seguridad/sede/servicios/sede.service';
import dayjs from "dayjs";
import { Modulo } from 'app/main/pages/compartidos/modelos/Modulo';

@Component({
  selector: 'app-producto-principal',
  templateUrl: './producto-principal.component.html',
  styleUrls: ['./producto-principal.component.scss']
})
export class ProductoPrincipalComponent implements OnInit {
  /*INPUT RECIBEN*/
  @Input() listaProductoChild: any;

  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;

  /*VARIABLES*/
  public codigo: number;
  public institucion: any;
  public codigoSede = null;
  public descripcion: string;
  public nemonicoModulo: string = "VEN";

  /*LISTAS*/
  public listaProducto: Producto[] = [];
  public listaAplicacion: Aplicacion[] = [];
  public listaPeriodoRegAniLec: any[];

  /*TABS*/
  public selectedTab: number;

  /*OBJETOS*/
  private currentUser: LoginAplicacion;
  private sede: Sede;
  private modulo: Modulo;

  /*DETAIL*/
  public showDetail: boolean;

  /*PAGINACION*/
  public page: number;
  public itemsRegistros: number;

  /*OBJETOS*/
  public productoSeleccionado: Producto;

  /*FORMULARIOS*/
  public formProducto: FormGroup;
  public formProductoDescripcion: FormGroup;

  /*CONSTRUCTOR */
  constructor(
    /*Servicios*/
    private readonly productoService: ProductoService,
    private readonly sedeService: SedeService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
  ) {
    this.codigo = 0;
    this.codigoSede = 0;
    this.itemsRegistros = 5;
    this.page = 1;
    this.showDetail = false;
    this.selectedTab = 0;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.sede = this.currentUser.sede;
  }

  ngOnInit() {
    if (this.listaProductoChild != null) {
      this.listaProducto = this.listaProductoChild;
    }
    this.formProductoDescripcion = this.formBuilder.group({
      descripcion: new FormControl('', Validators.required),
    })
  }

  listarProductoPorDescripcion() {
    // Receptar la descripción de formProductoDescripcion.value
    let productoDescripcionTemp = this.formProductoDescripcion.value;
    this.descripcion = productoDescripcionTemp.descripcion;
    this.productoService.listarProductoPorDescripcion(this.descripcion, this.nemonicoModulo).subscribe(
      (respuesta) => {
        this.listaProducto = respuesta['listado'];
        for (const ele of this.listaProducto) {
          ele.fechaRegistra = dayjs(ele.fechaRegistra).format("YYYY-MM-DD")
          // Obtener modulo
          this.productoService.buscarModuloPorCodigo(ele.codModulo).subscribe(
            (respuesta) => {
              this.modulo = respuesta['objeto'];
              ele.modulo = this.modulo;
            }
          )
        }
      }
    );
  }

  listaProductoActualizada(event) {
    this.listaProducto = event;
  }

  openDetail(codjornada) {
    this.showDetail = true;
  }

  openEditarDetail(producto: Producto) {
    this.productoSeleccionado = producto;
    this.showDetail = true;
  }

  openRemoverDetail(producto: Producto) {
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
          this.productoService.eliminarProductoPorId(producto.codigo).subscribe({
            next: (response) => {
              this.listarProductoPorDescripcion();
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
    this.productoSeleccionado = null;
  }

  // Contar los caracteres de la cedula para activar boton <Buscar>
  onKey(event) {
    if (event.target.value.length != 10) {
      this.resetTheForm();
    } else {
      this.listarProductoPorDescripcion();
    }
  }

  resetTheForm(): void {
    this.listaProducto = null;
  }

  validateFormat(event) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }

    const regex = /[0-9]/;

    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

  /* Variables del html, para receptar datos y validaciones*/
  get descripcionField() {
    return this.formProductoDescripcion.get('descripcion');
  }

}
