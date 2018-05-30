import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {

  productos: any[] = [
    {
      "titulo": "titulo producto 1",
      "precio": 55,
      "descuento": 10,
      "cantidad": 100
    },
    {
      "titulo": "titulo producto 2",
      "precio": 55,
      "descuento": 10,
      "cantidad": 100
    },
    {
      "titulo": "titulo producto 3",
      "precio": 55,
      "descuento": 10,
      "cantidad": 100
    },
    {
      "titulo": "titulo producto 4",
      "precio": 55,
      "descuento": 10,
      "cantidad": 100
    },
    {
      "titulo": "titulo producto 5",
      "precio": 55,
      "descuento": 10,
      "cantidad": 100
    },
    {
      "titulo": "titulo producto 6",
      "precio": 55,
      "descuento": 10,
      "cantidad": 100
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
