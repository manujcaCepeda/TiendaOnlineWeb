import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeProductsComponent } from './components/product/home-products/home-products.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { StockComponent } from './components/product/stock/stock.component';
import { ProductoService } from './services/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { IngresoProductosComponent } from './components/product/ingreso-productos/ingreso-productos.component';
import { MisComprasComponent } from './components/user/mis-compras/mis-compras.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { GestionProductosComponent } from './components/product/gestion-productos/gestion-productos.component';
import { NewProductoComponent } from './components/product/new-producto/new-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HomeProductsComponent,
    FooterComponent,
    StockComponent,
    IngresoProductosComponent,
    MisComprasComponent,
    LoginComponent,
    RegistroComponent,
    GestionProductosComponent,
    NewProductoComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
