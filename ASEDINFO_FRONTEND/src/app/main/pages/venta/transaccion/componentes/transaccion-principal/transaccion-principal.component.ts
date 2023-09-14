import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginAplicacion } from 'app/auth/models/loginAplicacion';
import { Sede } from 'app/auth/models/sede';
import { Transaccion } from 'app/main/pages/compartidos/modelos/Transaccion';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { TransaccionService } from '../../servicios/transaccion.service';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { MyValidators } from 'app/utils/validators';
import { SedeService } from 'app/main/pages/seguridad/sede/servicios/sede.service';
import dayjs from "dayjs";
import { PersonaService } from 'app/main/pages/catalogo/persona/servicios/persona.service';
import { ProductoService } from 'app/main/pages/catalogo/producto/servicios/producto.service';
import { Persona } from 'app/main/pages/compartidos/modelos/Persona';
import { Cliente } from 'app/main/pages/compartidos/modelos/Cliente';
import { Producto } from 'app/main/pages/compartidos/modelos/Producto';
import { ClienteService } from '../../../cliente/servicios/cliente.service';

@Component({
  selector: 'app-transaccion-principal',
  templateUrl: './transaccion-principal.component.html',
  styleUrls: ['./transaccion-principal.component.scss']
})
export class TransaccionPrincipalComponent implements OnInit {
  /*INPUT RECIBEN*/
  @Input() listaTransaccionChild: any;

  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;

  /*VARIABLES*/
  public codigo: number;
  public institucion: any;
  public codigoSede = null;
  public descripcion: string;
  public colorFila: string;
  public fechaHoy = dayjs(new Date).format("YYYY-MM-DD");

  /*LISTAS*/
  public listaTransaccion: Transaccion[] = [];
  public listaAplicacion: Aplicacion[] = [];
  public listaPeriodoRegAniLec: any[];

  /*TABS*/
  public selectedTab: number;

  /*OBJETOS*/
  private currentUser: LoginAplicacion;
  private sede: Sede;
  private persona: Persona;
  private cliente: Cliente;
  private producto: Producto;

  /*DETAIL*/
  public showDetail: boolean;

  /*PAGINACION*/
  public page: number;
  public itemsRegistros: number;

  /*OBJETOS*/
  public transaccionSeleccionado: Transaccion;

  /*FORMULARIOS*/
  public formTransaccion: FormGroup;
  public formTransaccionDescripcion: FormGroup;

  /*CONSTRUCTOR */
  constructor(
    /*Servicios*/
    private readonly transaccionService: TransaccionService,
    private readonly sedeService: SedeService,
    private readonly clienteService: ClienteService,
    private readonly personaService: PersonaService,
    private readonly productoService: ProductoService,
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
    this.colorFila = "green";
    if (this.listaTransaccionChild != null) {
      this.listaTransaccion = this.listaTransaccionChild;
    }
    this.formTransaccionDescripcion = this.formBuilder.group({
      descripcion: new FormControl('', Validators.required),
    })
  }

  listarTransaccionPorDescripcion() {
    this.listaTransaccion = [];
    // Receptar la descripción de formTransaccionDescripcion.value
    let transaccionDescripcionTemp = this.formTransaccionDescripcion.value;
    this.descripcion = transaccionDescripcionTemp.descripcion;
    if (this.descripcion?.length != 0) {
      this.transaccionService.listarTransaccionPorDescripcion(this.descripcion).subscribe(
        (respuesta) => {
          this.listaTransaccion = respuesta['listado'];
          console.log("this.listaTransaccion = ", this.listaTransaccion);
          this.mostrarListaTransaccion();
        }
      )
    } else {
      this.transaccionService.listarTransaccionActivo().subscribe(
        (respuesta) => {
          this.listaTransaccion = respuesta['listado'];
          this.mostrarListaTransaccion();
        }
      )
    };
  }

  mostrarListaTransaccion() {
    console.log("this.listaTransaccion?.length = ", this.listaTransaccion?.length);
    if (this.listaTransaccion?.length > 0) {
      for (const ele of this.listaTransaccion) {
        ele.colorFila = "green";
        ele.fechaInicio = dayjs(ele.fechaInicio).format("YYYY-MM-DD");
        ele.fechaFin = dayjs(ele.fechaFin).format("YYYY-MM-DD");
        console.log("ele.fechaFin = ", ele.fechaFin);
        console.log("Date = ", dayjs(new Date).format("YYYY-MM-DD"))
        if (ele.fechaFin <= this.fechaHoy) {
          console.log("ok")
          ele.colorFila = "red";
        }
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
    }
  }

  listaTransaccionActualizada(event) {
    this.listaTransaccion = event;
  }

  openDetail(codjornada) {
    this.showDetail = true;
  }

  openEditarDetail(transaccion: Transaccion) {
    this.transaccionSeleccionado = transaccion;
    this.showDetail = true;
  }

  openRemoverDetail(transaccion: Transaccion) {
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
          this.transaccionService.eliminarTransaccionPorId(transaccion.codigo).subscribe({
            next: (response) => {
              this.listarTransaccionPorDescripcion();
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
    this.transaccionSeleccionado = null;
  }

  // Contar los caracteres de la cedula para activar boton <Buscar>
  onKey(event) {
    if (event.target.value.length != 10) {
      this.resetTheForm();
    } else {
      this.listarTransaccionPorDescripcion();
    }
  }

  resetTheForm(): void {
    this.listaTransaccion = null;
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
    return this.formTransaccionDescripcion.get('descripcion');
  }

}
