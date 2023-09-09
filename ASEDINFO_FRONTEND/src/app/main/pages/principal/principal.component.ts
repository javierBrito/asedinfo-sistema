import { ModalAcuerdoConfidencialidadComponent } from './../compartidos/modal/modal-acuerdo-confidencialidad/modal-acuerdo-confidencialidad.component';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/auth/service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit, OnDestroy {
  @ViewChild("modal_acuerdo_confidencialidad", { static: false }) modal_acuerdo_confidencialidad;
  /* Modal */
  public modalOption: NgbModalOptions = {};

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {PricingService} _pricingService
   */
  constructor(
    private modalService: NgbModal,
    private _authenticationService: AuthenticationService,
    private _router: Router,
  ) {
    this.modalOption = {
      scrollable: true,
      centered: true,
      backdrop: 'static',
      keyboard: false,
    };
  }



  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this._unsubscribeAll = new Subject();
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
