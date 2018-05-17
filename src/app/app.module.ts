import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeProductsComponent } from './components/product/home-products/home-products.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { StockComponent } from './components/product/stock/stock.component';

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
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
