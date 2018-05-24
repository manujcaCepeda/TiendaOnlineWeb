import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/Producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  public productos: Producto[] = [];
  public errorMsg;

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getproductos()
        .subscribe(data => {
          this.productos = data
          console.log(data);
        },
      error => this.errorMsg = error);
  }


}
