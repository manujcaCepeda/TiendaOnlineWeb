import { CategoriaService } from './../../../services/categoria.service';
import { Router } from '@angular/router';
import { ProductoService } from './../../../services/producto.service';
import { Producto } from './../../../models/producto';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {

  public errorMsg;
  newProducto: Producto;
  public categorias = [];
  categoria = "Seleccione Categoría";


  constructor(
    private productoService: ProductoService,
    private router: Router,
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.newProducto = {};

    this.categoriaService.getCategorias()
      .subscribe(data => {
        let resp: any = data;
        this.categorias = resp.data;
        console.log(this.categorias);
      },
        error => this.errorMsg = error);
  }

  sendNewProduct() {
    this.errorMsg = "";
    if (this.categoria === "Seleccione Categoría") {
      this.errorMsg = "Seleccione una Categoría"
    } else {
      console.log(this.newProducto);
      this.newProducto.categoria = {
        "id": this.categoria
      }
      this.productoService.guardarProducto(this.newProducto).subscribe(data => {
        this.router.navigateByUrl('/gestion-productos');
      },
        error => this.errorMsg = error);
    }
  }

}
