import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './components/product/stock/stock.component';
import { HomeProductsComponent } from './components/product/home-products/home-products.component';


const routes: Routes = [
  { path: 'stock', component: StockComponent },
  { path: 'home-products', component: HomeProductsComponent },
  { path: '', redirectTo: '/home-products', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
