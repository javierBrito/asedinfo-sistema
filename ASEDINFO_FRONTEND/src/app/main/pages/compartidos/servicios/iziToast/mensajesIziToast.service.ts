import { Injectable } from '@angular/core';
declare var iziToast: any;

@Injectable({
  providedIn: 'root'
})
export class MensajesIziToastService {

  constructor() { }

  mensajeErrorIzi(titulo: string, mensaje: string): void {
    iziToast.show({
      title: titulo,
      titleColor: '#FF0000',
      color: '#FFF',
      class: 'Text-danger',
      position: 'topRight',
      message: mensaje
    })
  }
  mensajeCorrectoIzi(titulo: string, mensaje: string): void {
    iziToast.show({
      title: titulo,
      titleColor: '#1DC74C',
      color: '#FFF',
      class: 'Text-success',
      position: 'topRight',
      message: mensaje
    })
  }
  mensajeAdvertenciaIzi(titulo: string, mensaje: string): void {
    iziToast.show({
      title: titulo,
      titleColor: '#1DC74C',
      color: 'orange',
      class: 'Text-warning',
      position: 'topRight',
      message: mensaje
    })
  }

}
