import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() close: EventEmitter<boolean>;

  public showDetail: boolean;

  constructor() {
    this.close = new EventEmitter<boolean>();
    this.showDetail = true;
  }

  ngOnInit() {
  }

  /**
   * Cierra el detalle
   */
  closeDetail() {
    // Marco que ya no se vea el detalle
    this.showDetail = false;
    // doy tiempo a la ventana para que se cierre
    setTimeout(() => {
      // Emito el evento para que se cierre
      this.close.emit(false);
    }, 600);
  }

}
