import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Producto } from '../models/Producto';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = "/assets/data/productos.json"

  private baseUrl: string = 'http://localhost:8080/articulo';

  constructor(private http: HttpClient) { }

  getproductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Server Error");
  }

  guardarProducto(producto: Producto) {
    return this.http.post(this.baseUrl, producto)
      .pipe(catchError(this.errorHandler));
  }

}
