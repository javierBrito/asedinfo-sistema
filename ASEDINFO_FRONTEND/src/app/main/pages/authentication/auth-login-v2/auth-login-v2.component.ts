import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { CoreConfigService } from '@core/services/config.service';
import { CoreMenu } from '@core/types';
import { Recurso } from 'app/auth/models/recurso.model';
import { Rol } from 'app/auth/models/rol.model';
import { AuthenticationService } from 'app/auth/service';

@Component({
  selector: 'app-auth-login-v2',
  templateUrl: './auth-login-v2.component.html',
  // Para el captcha adicionar ruta a .css
  styleUrls: ['./auth-login-v2.component.scss', './auth-login-v2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthLoginV2Component implements OnInit {
  // Modales
  @ViewChild("modal_acuerdo_confidencialidad", { static: false }) modal_acuerdo_confidencialidad: TemplateRef<any>;

  /* Modal */
  public modalOption: NgbModalOptions = {};

  //  Public
  public coreConfig: any;
  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';
  public passwordTextType: boolean;
  public aplicacionVEN: boolean = false;
  menu: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  // Variable para almacenar el resultado del captcha
  public captchaResult: string;
  private captchaCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _coreMenuService: CoreMenuService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private modalService: NgbModal
  ) {
    // redirect to home if already logged in
    if (this._authenticationService.currentUserValue) {
      this._router.navigate(['/']);
    }

    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
    this.modalOption = {
      scrollable: true,
      centered: true,
      backdrop: 'static',
      keyboard: false,
    };
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Inicio - Adicionar verificar el captcha
    //if (this.loginForm.value.captcha !== this.captchaResult) {
    //  this.error = 'Captcha incorrecto';
    //  return;
    //}
    // Fin - Adicionar verificar el captcha

    // Login
    this.loading = true;
    this._authenticationService
      .login(this.f.usuario.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.accesoConcedido == true) {
            this.obtenerMenu();

            this._router.navigate([this.returnUrl]);
            // jbrito-20230114
            //this.modalService.open(this.modal_acuerdo_confidencialidad, this.modalOption).result.then(result => {
            //  if (result === 'no') {
            //    this._authenticationService.logout();
            //    this._router.navigate(['/pages/authentication/login-v2']);
            //  }
            //}).catch((res) => {
            //});
          } else {
            this.error = data.observacion;
            this.loading = false;
          }
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );

  }

  obtenerMenu() {
    this._authenticationService.obtenerMenu().subscribe(
      data => {
        let menuArmar: Rol[] = JSON.parse(localStorage.getItem('menuJson'));
        if (menuArmar != null) {
          this.menu = this.obtenerRoles(menuArmar);
        } else {
          this.menu = null;
        }

        //this.menu = menu;
        this._coreMenuService.unregister('main');
        // Register the menu to the menu service
        this._coreMenuService.register('main', this.menu);

        // Set the main menu as our current menu
        this._coreMenuService.setCurrentMenu('main');
      }
    );
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  obtenerRoles(roles: Rol[]): CoreMenu[] {
    var menuItem: CoreMenu[] = [];
    //console.log("roles = ", roles['0']['aplicacion'].prefijo);
    roles.forEach(rol => {
      var item: CoreMenu =
      {
        id: rol.codigo.toString(),
        type: 'section',
        title: rol.nombre,
      };
      if (rol?.aplicacion?.prefijo == 'VEN') {
        this.aplicacionVEN = true;
        this._router.navigate(['/pages/venta/transaccion'])
      }
      if (rol.menu.length > 0) {
        item.children = this.obtenerRecursos(rol.menu);
      } else {
      }
      menuItem.push(item);
    });

    return menuItem;
  }

  obtenerRecursos(recursos: Recurso[]): CoreMenu[] {
    var menuProceso: CoreMenu[] = [];
    recursos.forEach(hijo => {
      var item: CoreMenu =
      {
        id: hijo.codigo.toString(),
        type: 'collapsible',
        title: hijo.nombre,
        icon: 'file-text',
      };
      if (hijo.recursosHijos.length > 0) {
        item.children = this.obtenerRecursos(hijo.recursosHijos);
      } else {
        item.type = 'item';
        item.url = hijo.url;
        item.icon = 'circle';
      }
      menuProceso.push(item);
    });

    return menuProceso;
  }

  // Inicio - Generar el captcha con caracteres alfanuméricos
  generateCaptcha(): void {
    this.captchaResult = '';
    for (let i = 0; i < 6; i++) {
      this.captchaResult += this.captchaCharacters.charAt(Math.floor(Math.random() * this.captchaCharacters.length));
    }
  }

  isLetter(character: string): boolean {
    return character.match(/[a-z]/i) !== null;
  }

  generateStyle(): any {
    const fontSize = Math.floor(Math.random() * 5) + 20;
    const rotation = Math.floor(Math.random() * 51) - 25;
    const color = this.generateIntenseColor();
    const spacing = Math.floor(Math.random() * 20) + 10;
    const fontWeight = Math.random() < 0.9 ? 'normal' : 'bold';
    const translateY = Math.floor(Math.random() * 10) - 10; // Ajusta el rango de desplazamiento vertical

    return {
      'font-size': `${fontSize}px`,
      'transform': `rotate(${rotation}deg) translateY(${translateY}px)`, // Aplica la transformación 2D
      'color': color,
      'margin-right': `${spacing}px`,
      'font-weight': fontWeight
    };
  }

  generateIntenseColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 7; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
  // Fin - Generar el captcha con caracteres alfanuméricos

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      usuario: [null, Validators.required],
      password: [null, Validators.required],
      //captcha: ['', Validators.required]
    });

    // Inicio - Generar el captcha al inicializar el componente
    //this.generateCaptcha();
    // Fin - Generar el captcha al inicializar el componente

    // Inicio - Desactivar la capacidad de pegar en el campo de captcha
    /*
     const captchaField = document.getElementById('captcha');
     captchaField.addEventListener('paste', (event: ClipboardEvent) => {
       event.preventDefault();
     });
    */
    // Fin - Desactivar la capacidad de pegar en el campo de captcha

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
