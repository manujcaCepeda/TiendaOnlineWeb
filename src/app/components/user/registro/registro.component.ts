import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  usuario: Usuario;

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuario = {
      apellidos: "",
      nombres: "",
      email: "",
      password: "",
      telefono: "",
      direccion: "",
      rol: ""
    };
  }

  onRegister() {
    this.router.navigateByUrl('/login');
   
  }
}
