import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { Producto } from 'app/main/pages/compartidos/modelos/Producto';
import { MensajesIziToastService } from 'app/main/pages/compartidos/servicios/iziToast/mensajesIziToast.service';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/catalogo/producto/componentes/detail/detail.component';
import { ProductoService } from '../../../servicios/producto.service';
import { SedeService } from 'app/main/pages/seguridad/sede/servicios/sede.service';
import dayjs from "dayjs";
import { Modulo } from 'app/main/pages/compartidos/modelos/Modulo';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
  /*SPINNER*/
  public load_btn: boolean;

  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaProducto: EventEmitter<any>;

  /*INPUT RECIBEN*/
  @Input() listaProductoChild: any;
  @Input() productoEditar: Producto;
  @Input() codigoChild: number;
  @Input() descripcionChild: string;

  /*MODALES*/
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;
  @ViewChild(DetailComponent, { static: false }) parentDetail: DetailComponent;

  /*VARIABLES */
  public showDetail: boolean;
  private amieRegex: string;
  private currentUser: any;
  private nemonicoModulo: string = "VEN";
  private codModulo: number = 2;

  /*FORMULARIOS*/
  public formProducto: FormGroup;

  /*OBJETOS*/
  public producto: Producto;
  public listaSede: Sede[];
  public listaModulo: Modulo[];
  public listaRespuesta = [
    { valor: "SI" },
    { valor: "NO" },
  ];

  /*CONSTRUCTOR*/
  constructor(
    private productoService: ProductoService,
    private sedeService: SedeService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
    private mensajeIzi: MensajesIziToastService,
  ) {
    /*CARGAR COMBOS*/
    this.listarSedeActivo();
    this.listarModuloActivo();

    this.load_btn = false;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.sede = this.currentUser.sede;
    //this.amieRegex = this.patternAmie(this.sede.nombre);
    this.close = new EventEmitter<boolean>();
    this.listaProducto = new EventEmitter<any>();
    this.showDetail = true;
  }

  ngOnInit() {
    if (this.productoEditar) {
      this.formProducto = this.formBuilder.group({
        codModulo: new FormControl(this.productoEditar.codModulo, Validators.required),
        descripcion: new FormControl(this.productoEditar.descripcion, Validators.required),
        precioCosto: new FormControl(this.productoEditar.precioCosto, Validators.required),
        precioMayoreo: new FormControl(this.productoEditar.precioMayoreo),
        fechaRegistra: new FormControl(dayjs(this.productoEditar.fechaRegistra).format("YYYY-MM-DD"), Validators.compose([Validators.required, ,])),
        numExistenciaActual: new FormControl(this.productoEditar.numExistenciaActual, Validators.required),
        numExistenciaMinima: new FormControl(this.productoEditar.numExistenciaMinima),
      });
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formProducto = this.formBuilder.group({
        codModulo: new FormControl(this.codModulo, Validators.required),
        descripcion: new FormControl('', Validators.required),
        precioCosto: new FormControl('', Validators.required),
        precioMayoreo: new FormControl(''),
        fechaRegistra: new FormControl(dayjs(new Date).format("YYYY-MM-DD"), Validators.required),
        numExistenciaActual: new FormControl('', Validators.required),
        numExistenciaMinima: new FormControl(''),
      })
    }
  }

  listarSedeActivo() {
    this.sedeService.listarSedeActivo().subscribe({
      next: (response) => {
        this.listaSede = response['listado'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  async listarModuloActivo() {
    return new Promise((resolve, rejects) => {
      this.productoService.listarModuloActivo().subscribe({
        next: (response) => {
          this.listaModulo = response['listado'];
          for (const ele of this.listaModulo) {
            if (ele.nemonico == this.nemonicoModulo) {
              this.codModulo = ele.codigo;
            }
          }
          resolve("OK");
        },
        error: (error) => {
          console.log(error);
          rejects("Error");
        }
      });
    });
  }

  async listarProductoPorDescripcion() {
    this.productoService.listarProductoPorDescripcion(this.descripcionChild, this.nemonicoModulo).subscribe(
      (respuesta) => {
        this.listaProductoChild = respuesta['listado']
        for (const ele of this.listaProductoChild) {
          ele.fechaRegistra = dayjs(ele.fechaRegistra).format("YYYY-MM-DD")
        }
        this.listaProducto.emit(this.listaProductoChild);
      }
    );
  }

  patternAmie(amie: string) {
    const valorEncontrar = amie
    const regExp = new RegExp('([0-9])\\w+')
    const amieFiltrado = valorEncontrar.match(regExp)
    return amieFiltrado['0']
  }

  addRegistro() {
    if (this.formProducto?.valid) {
      let productoTemp = this.formProducto.value;
      this.producto = new Producto({
        codigo: 0,
        codModulo: productoTemp.codModulo,
        descripcion: productoTemp.descripcion,
        precioCosto: productoTemp.precioCosto,
        precioMayoreo: productoTemp.precioMayoreo,
        numExistenciaActual: productoTemp.numExistenciaActual,
        numExistenciaMinima: productoTemp.numExistenciaMinima,
        fechaRegistra: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
        estado: 'A',
      });
    }
    if (this.descripcionChild == undefined) {
      this.descripcionChild = this.producto['data'].descripcion;
    }
    if (this.productoEditar) {
      this.producto['data'].codigo = this.productoEditar.codigo;
      this.producto['data'].descripcion = this.descripcionChild;
      this.productoService.guardarProducto(this.producto['data']).subscribe({
        next: (response) => {
          this.listarProductoPorDescripcion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.productoService.guardarProducto(this.producto['data']).subscribe({
        next: async (response) => {
          this.listarProductoPorDescripcion();
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

  compararSede(o1, o2) {
    return o1 === undefined || o2 === undefined || o2 === null ? false : o1.codigo === o2.codigo;
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

  get descripcionField() {
    return this.formProducto.get('descripcion');
  }
  get precioCostoField() {
    return this.formProducto.get('precioCosto');
  }
  get precioMayoreoField() {
    return this.formProducto.get('precioMayoreo');
  }
  get numExistenciaActualField() {
    return this.formProducto.get('numExistenciaActual');
  }
  get numExistenciaMinimaField() {
    return this.formProducto.get('numExistenciaMinima');
  }
  get fechaRegistraField() {
    return this.formProducto.get('fechaRegistra');
  }
  get codModuloField() {
    return this.formProducto.get('codModulo');
  }

}
