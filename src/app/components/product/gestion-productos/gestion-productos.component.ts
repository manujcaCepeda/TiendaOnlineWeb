import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/Producto';
import { ProductoService } from '../../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  public productos: Producto[] = [];
  public errorMsg;

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.productoService.getproductos()
        .subscribe(data => {
          this.productos = data
          console.log(data);
        },
      error => this.errorMsg = error);
  }

  // public agregarproducto() {
  //   this.router.navigateByUrl('nuevo-producto');
  // }
}
