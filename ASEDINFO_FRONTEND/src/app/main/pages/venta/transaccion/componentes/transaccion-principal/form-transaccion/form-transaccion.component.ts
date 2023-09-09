import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Sede } from 'app/auth/models/sede';
import { Transaccion } from 'app/main/pages/compartidos/modelos/Transaccion';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import { DetailComponent } from 'app/main/pages/venta/transaccion/componentes/detail/detail.component';
import { TransaccionService } from '../../../servicios/transaccion.service';
import { SedeService } from 'app/main/pages/seguridad/sede/servicios/sede.service';
import dayjs from "dayjs";
import { ClienteService } from 'app/main/pages/venta/cliente/servicios/cliente.service';
import { ProductoService } from 'app/main/pages/catalogo/producto/servicios/producto.service';
import { Cliente } from 'app/main/pages/compartidos/modelos/Cliente';
import { Producto } from 'app/main/pages/compartidos/modelos/Producto';
import { PersonaService } from 'app/main/pages/catalogo/persona/servicios/persona.service';
import { Persona } from 'app/main/pages/compartidos/modelos/Persona';

@Component({
  selector: 'app-form-transaccion',
  templateUrl: './form-transaccion.component.html',
  styleUrls: ['./form-transaccion.component.scss']
})
export class FormTransaccionComponent implements OnInit {
  /*SPINNER*/
  public load_btn: boolean;

  /*OUTPUT ENVIAN*/
  @Output() close: EventEmitter<boolean>;
  @Output() listaTransaccion: EventEmitter<any>;

  /*INPUT RECIBEN*/
  @Input() listaTransaccionChild: any;
  @Input() transaccionEditar: Transaccion;
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
  private numMes: number;

  /*FORMULARIOS*/
  public formTransaccion: FormGroup;

  /*OBJETOS*/
  public transaccion: Transaccion;
  public persona: Persona;
  public producto: Producto;
  public cliente: Cliente;
  public listaSede: Sede[];
  public listaCliente: Cliente[];
  public listaProducto: Producto[];
  public listaRespuesta = [
    { valor: "SI" },
    { valor: "NO" },
  ];

  /*CONSTRUCTOR*/
  constructor(
    private transaccionService: TransaccionService,
    private sedeService: SedeService,
    private mensajeService: MensajeService,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private personaService: PersonaService,
  ) {
    this.load_btn = false;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.sede = this.currentUser.sede;
    //this.amieRegex = this.patternAmie(this.sede.nombre);
    this.close = new EventEmitter<boolean>();
    this.listaTransaccion = new EventEmitter<any>();
    this.showDetail = true;
    /*LISTAS*/
    this.listarCliente();
    this.listarProducto();
  }

  ngOnInit() {
    this.listarSedeActivo();
    if (this.transaccionEditar) {
      this.formTransaccion = this.formBuilder.group({
        codCliente: new FormControl(this.transaccionEditar.codCliente, Validators.required),
        codProducto: new FormControl(this.transaccionEditar.codProducto, Validators.required),
        descripcion: new FormControl(this.transaccionEditar.descripcion, Validators.required),
        precioVenta: new FormControl(this.transaccionEditar.precioVenta, Validators.required),
        fechaInicio: new FormControl(dayjs(this.transaccionEditar.fechaInicio).format("YYYY-MM-DD"), Validators.compose([Validators.required, ,])),
        fechaFin: new FormControl(dayjs(this.transaccionEditar.fechaFin).format("YYYY-MM-DD"), Validators.compose([Validators.required, ,])),
        numProductoVenta: new FormControl(this.transaccionEditar.numProductoVenta, Validators.required),
        numMes: new FormControl(this.transaccionEditar.numMes),
      })
      //AQUI TERMINA ACTUALIZAR
    } else {
      this.formTransaccion = this.formBuilder.group({
        codCliente: new FormControl('', Validators.required),
        codProducto: new FormControl('', Validators.required),
        descripcion: new FormControl('', Validators.required),
        precioVenta: new FormControl('', Validators.required),
        fechaInicio: new FormControl(dayjs(new Date).format("YYYY-MM-DD"), Validators.required),
        fechaFin: new FormControl(dayjs(new Date).format("YYYY-MM-DD"), Validators.required),
        numProductoVenta: new FormControl('', Validators.required),
        numMes: new FormControl(''),
      })
    }
  }

  listarCliente() {
    this.clienteService.listarClienteActivo().subscribe(
      (respuesta) => {
        this.listaCliente = respuesta['listado'];
        for (const ele of this.listaCliente) {
          // Obtener persona
          this.personaService.buscarPersonaPorCodigo(ele.codPersona).subscribe(
            (respuesta) => {
              this.persona = respuesta['objeto'];
              ele.persona = this.persona;
            }
          )
        };
      }
    );
  }

  listarProducto() {
    this.productoService.listarProductoActivo().subscribe(
      (respuesta) => {
        this.listaProducto = respuesta['listado'];
      }
    );
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

  async listarTransaccionPorDescripcion() {
    this.transaccionService.listarTransaccionPorDescripcion(this.descripcionChild).subscribe(
      (respuesta) => {
        this.listaTransaccionChild = respuesta['listado']
        for (const ele of this.listaTransaccionChild) {
          ele.fechaInicio = dayjs(ele.fechaInicio).format("YYYY-MM-DD")
          ele.fechaFin = dayjs(ele.fechaFin).format("YYYY-MM-DD")
          // Obtener cliente
          this.clienteService.buscarClientePorCodigo(ele.codCliente).subscribe(
            (respuesta) => {
              this.cliente = respuesta['objeto'];
              ele.cliente = this.cliente;
              // Obtener persona
              this.personaService.buscarPersonaPorCodigo(ele.cliente.codPersona).subscribe(
                (respuesta) => {
                  this.persona = respuesta['objeto'];
                  ele.cliente.persona = this.persona;
                }
              )
            }
          )
          // Obtener producto
          this.productoService.buscarProductoPorCodigo(ele.codProducto).subscribe(
            (respuesta) => {
              this.producto = respuesta['objeto'];
              ele.producto = this.producto;
            }
          )
        }
        this.listaTransaccion.emit(this.listaTransaccionChild);
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
    if (this.formTransaccion?.valid) {
      let transaccionTemp = this.formTransaccion.value;
      let fechaFinDate = new Date();
      let fechaFinString = dayjs(transaccionTemp?.fechaFin).format("YYYY-MM-DD HH:mm:ss.SSS");
      if (transaccionTemp?.numMes != "" && transaccionTemp?.numMes != 0) {
        this.numMes = transaccionTemp?.numMes;
        fechaFinDate.setMonth(fechaFinDate.getMonth() + this.numMes)
        fechaFinString = fechaFinDate.getFullYear() + "-" + (fechaFinDate.getMonth() + 1) + "-" + fechaFinDate.getDate();
      }
      this.transaccion = new Transaccion({
        codigo: 0,
        codCliente: transaccionTemp?.codCliente,
        codProducto: transaccionTemp?.codProducto,
        descripcion: transaccionTemp?.descripcion,
        precioVenta: transaccionTemp?.precioVenta,
        numProductoVenta: transaccionTemp?.numProductoVenta,
        numMes: this.numMes,
        fechaInicio: dayjs(transaccionTemp?.fechaInicio).format("YYYY-MM-DD HH:mm:ss.SSS"),
        fechaFin: dayjs(fechaFinString).format("YYYY-MM-DD HH:mm:ss.SSS"),
        fechaRegistra: dayjs(new Date).format("YYYY-MM-DD HH:mm:ss.SSS"),
        estado: 'A',
      });
    }
    if (this.transaccionEditar) {
      this.transaccion['data'].codigo = this.transaccionEditar.codigo;
      this.transaccion['data'].descripcion = this.descripcionChild;
      this.transaccionService.guardarTransaccion(this.transaccion['data']).subscribe({
        next: (response) => {
          this.listarTransaccionPorDescripcion();
          this.mensajeService.mensajeCorrecto('Se ha actualizado el registro correctamente...');
          this.parentDetail.closeDetail();
        },
        error: (error) => {
          this.mensajeService.mensajeError('Ha habido un problema al actualizar el registro...');
          this.parentDetail.closeDetail();
        }
      });
    } else {
      this.transaccionService.guardarTransaccion(this.transaccion['data']).subscribe({
        next: async (response) => {
          this.listarTransaccionPorDescripcion();
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

  // Contar los caracteres de la cedula para activar boton <Buscar>
  onKey(event) {
    if (event.target.value.length != 0) {
      var fechaFinDate = new Date();
      var fechaFinString = "";
      this.numMes = Number(event.target.value);
      fechaFinDate.setMonth(fechaFinDate.getMonth() + this.numMes);
      fechaFinString = dayjs(fechaFinDate.getFullYear() + "-" + (fechaFinDate.getMonth() + 1) + "-" + fechaFinDate.getDate()).format("YYYY-MM-DD");
      this.formTransaccion.controls.fechaFin.setValue(fechaFinString);
    } 
  }

  get descripcionField() {
    return this.formTransaccion.get('descripcion');
  }
  get precioVentaField() {
    return this.formTransaccion.get('precioVenta');
  }
  get numProductoVentaField() {
    return this.formTransaccion.get('numProductoVenta');
  }
  get fechaRegistraField() {
    return this.formTransaccion.get('fechaRegistra');
  }
  get fechaInicioField() {
    return this.formTransaccion.get('fechaInicio');
  }
  get fechaFinField() {
    return this.formTransaccion.get('fechaFin');
  }
  get codClienteField() {
    return this.formTransaccion.get('codCliente');
  }
  get codProductoField() {
    return this.formTransaccion.get('codProducto');
  }
  get numMesField() {
    return this.formTransaccion.get('numMes');
  }

}
