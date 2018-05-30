import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/Producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  public productos: Producto[] = [];
  public errorMsg;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getproductos()
      .subscribe(data => {
        let resp: any = data;
        this.productos = resp.data;
        console.log(data);
      },
        error => this.errorMsg = error);
  }

}
