import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../../services/nav.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  //message: string;

  constructor(private router: Router, private navService: NavService) { }

  ngOnInit() {
    //this.navService.currentmessage.subscribe(message => this.message = message);
  }

  public login(): void {
    this.router.navigateByUrl('/home-productos');
    let user: Usuario = {
      apellidos: "Cepeda",
      nombres: "Manuel",
      email: "manujca@hotmail.com",
      telefono: "0989345370",
      direccion: "El Inca",
      rol:"ADMIN"
    }
    this.navService.changeMessaeg(user);
  }
}
