import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  /*CONSTANTES */
  public mensajeCorrectoTexto: string;
  public mensajeAdvertenciaTexto: string;
  public mensajeErrorTexto: string;

  constructor() {
    this.mensajeCorrectoTexto = "Se ha procesado el registro correctamente...";
    this.mensajeAdvertenciaTexto = "Mensaje de Advertencia al procesar un registro...";
    this.mensajeErrorTexto = "Ha habido un problema al procesar el registro...";
  }

  mensajeCorrecto(mensaje: string): void {
    Swal.fire({
      text: mensaje,
      icon: 'success'
    });
  }

  mensajeAdvertencia(mensaje: string): void {
    Swal.fire({
      text: mensaje,
      icon: 'warning'
    });
  }

  mensajeError(mensaje: string): void {
    Swal.fire({
      text: mensaje,
      icon: 'error'
    });
  }

}
