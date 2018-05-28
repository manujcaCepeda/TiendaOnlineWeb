import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private usuario = new BehaviorSubject<Usuario>(null);
  usuarioActual = this.usuario.asObservable();

  constructor() { }

  changeMessaeg(user: Usuario) {
    this.usuario.next(user);
  }
}
