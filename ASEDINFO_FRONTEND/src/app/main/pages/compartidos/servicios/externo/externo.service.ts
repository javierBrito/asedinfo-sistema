import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UsuarioCedula } from '../../modelos/usuarioCedula';

@Injectable({
  providedIn: 'root'
})
export class ExternoService {
  constructor(private http: HttpClient) { }
  /*SERVICIOS EXTERNOS*/
}
