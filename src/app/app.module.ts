import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HomeProductsComponent,
    FooterComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
