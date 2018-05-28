import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../services/nav.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: '.app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;

  constructor(private navService: NavService) { }

  ngOnInit() {
    
    this.navService.usuarioActual.subscribe(usuario => this.usuario = usuario);
    //console.log("implementacion OnInit-------------------------------------------> " + this.message);

  }

  public logout(): void {
    this.navService.changeMessaeg(null);
  }
}
