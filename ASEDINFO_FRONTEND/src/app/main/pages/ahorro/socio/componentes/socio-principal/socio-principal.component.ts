import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginAplicacion } from 'app/auth/models/loginAplicacion';
import { Sede } from 'app/auth/models/sede';
import { Socio } from 'app/main/pages/compartidos/modelos/Socio';
import { MensajeService } from 'app/main/pages/compartidos/servicios/mensaje/mensaje.service';
import Swal from 'sweetalert2';
import { Aplicacion } from 'app/main/pages/compartidos/modelos/Aplicacion';
import { MyValidators } from 'app/utils/validators';
import { SedeService } from 'app/main/pages/seguridad/sede/servicios/sede.service';
import dayjs from "dayjs";
import { Persona } from 'app/main/pages/compartidos/modelos/Persona';
import { PersonaService } from 'app/main/pages/catalogo/persona/servicios/persona.service';
import { empty } from 'rxjs';
import { SocioService } from '../../servicios/socio.service';

@Component({
  selector: 'app-socio-principal',
  templateUrl: './socio-principal.component.html',
  styleUrls: ['./socio-principal.component.scss']
})
export class SocioPrincipalComponent implements OnInit {
  /*INPUT RECIBEN*/
  @Input() listaPersonaChild: any;

  /*MODALES*/
  @ViewChild("modal_confirm_delete", { static: false }) modal_confirm_delete: TemplateRef<any>;
  @ViewChild("modal_success", { static: false }) modal_success: TemplateRef<any>;
  @ViewChild("modal_error", { static: false }) modal_error: TemplateRef<any>;

  /*VARIABLES*/
  public codigo: number;
  public institucion: any;
  public codigoSede = null;
  public identificacion: string;

  /*LISTAS*/
  public listaSocio: Socio[] = [];
  public listaPersona: Persona[] = [];
  public listaAplicacion: Aplicacion[] = [];

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
  public personaSeleccionado: Persona;

  /*FORMULARIOS*/
  public formSocio: FormGroup;
  public formSocioIdentificacion: FormGroup;

  /*CONSTRUCTOR */
  constructor(
    /*Servicios*/
    private readonly socioService: SocioService,
    private readonly personaService: PersonaService,
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
    if (this.listaPersonaChild != null) {
      this.listaPersona = this.listaPersonaChild;
    }
    this.formSocioIdentificacion = this.formBuilder.group({
      identificacion: new FormControl('', Validators.compose([
        MyValidators.isCedulaValid,
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^[0-9]*$"),
      ])),
    })
  }

  listarSocioPorIdentificacion() {
    // Receptar la identificación de formInscripcionCedula.value
    let socioIdentificacionTemp = this.formSocioIdentificacion.value;
    this.identificacion = socioIdentificacionTemp.identificacion;
    this.personaService.listarPersonaPorIdentificacion(this.identificacion).subscribe(
      (respuesta) => {
        this.listaPersona = respuesta['listado'];
        for (const ele of this.listaPersona) {
          ele.fechaNacimiento = dayjs(ele.fechaNacimiento).format("YYYY-MM-DD")
          if (ele.codigo != null) {
            this.socioService.listarSocioPorPersona(ele.codigo).subscribe(
              (respuesta) => {
                this.listaSocio = respuesta['listado'];                                                            
                ele.socio = this.listaSocio[0];
                if (ele?.socio != undefined) {
                  ele.socio.fechaInicio = dayjs(ele.socio.fechaInicio).format("YYYY-MM-DD")
                }
              }
            )
          }
        }
      }
    );
  }

  listaPersonaActualizada(event) {
    this.listaPersona = event;
  }

  openDetail(codjornada) {
    this.showDetail = true;
  }

  openEditarDetail(persona: Persona) {
    this.personaSeleccionado = persona;
    this.showDetail = true;
  }

  openRemoverDetail(persona: Persona) {
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
          this.socioService.eliminarSocioPorId(persona.codigo).subscribe({
            next: (response) => {
              this.listarSocioPorIdentificacion();
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

  closeDetail($event) {
    this.showDetail = $event;
    this.personaSeleccionado = null;
  }

  // Contar los caracteres de la cedula para activar boton <Buscar>
  onKey(event) {
    if (event.target.value.length != 10) {
      this.resetTheForm();
    } else {
      this.listarSocioPorIdentificacion();    }
  }

  resetTheForm(): void {
    this.listaPersona = null;
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
  get identificacionField() {
    return this.formSocioIdentificacion.get('identificacion');
  }

}
