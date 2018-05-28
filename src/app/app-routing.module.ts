import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './components/product/stock/stock.component';
import { HomeProductsComponent } from './components/product/home-products/home-products.component';
import { IngresoProductosComponent } from './components/product/ingreso-productos/ingreso-productos.component';
import { MisComprasComponent } from './components/user/mis-compras/mis-compras.component';
import { logWarnings } from 'protractor/built/driverProviders';
import { LoginComponent } from './components/user/login/login.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { GestionProductosComponent } from './components/product/gestion-productos/gestion-productos.component';
import { NewProductoComponent } from './components/product/new-producto/new-producto.component';


const routes: Routes = [
  { path: 'stock', component: StockComponent },
  { path: 'home-productos', component: HomeProductsComponent },
  { path: 'ingreso-productos', component: IngresoProductosComponent },
  { path: 'gestion-productos', component: GestionProductosComponent },
  { path: 'nuevo-producto', component: NewProductoComponent },
  { path: 'mis-compras', component: MisComprasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: '/home-productos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
