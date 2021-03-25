import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ HttpClientModule } from '@angular/common/http';

//Services
import{ ClientesService } from './services/clientes.service';

//Datatables
import { DataTablesModule } from "angular-datatables";

//rutas
import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { EntradasFormComponent } from './components/entradas-form/entradas-form.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { SucursalesFormComponent } from './components/sucursales-form/sucursales-form.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { VentasFormComponent } from './components/ventas-form/ventas-form.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosFormComponent } from './components/usuarios-form/usuarios-form.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';

const rutas: Routes=[
    //Esta es la ruta principal
    {
      path: '',      
      pathMatch:  'full',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    //Sidebar
    {
      path: 'sidebar',
      component:  SidebarComponent
    },
    //Clientes
    {
      path: 'clientes',
      component: ClientesComponent
    },
    //clientes/add
    {
      path: 'clientes/add',
      component: ClientFormComponent
    },
    //clientes/edit/:id
    {
      path: 'clientes/edit/:id',
      component: ClientFormComponent
    },
    //Products
    {
      path: 'products',
      component: ProductsComponent
    },
    //products/add
    {
      path: 'products/add',
      component: ProductFormComponent
    },
    //products/edit/:id
    {
      path: 'products/edit/:id',
      component: ProductFormComponent
    },
    //Entradas
    {
      path: 'entradas',
      component: EntradasComponent
    },
    //entradas/add
    {
      path: 'entradas/add',
      component: EntradasFormComponent
    },
    //entradas/edit/:id
    {
      path: 'entradas/edit/:id',
      component: EntradasFormComponent
    },
    //Sucursales
    {
      path: 'sucursales',
      component: SucursalesComponent
    },
    //Sucursales/add
    {
      path: 'sucursales/add',
      component: SucursalesFormComponent
    },
    //Sucursales/edit/:id
    {
      path: 'sucursales/edit/:id',
      component: SucursalesFormComponent
    },
    //Ventas
    {
      path: 'ventas',
      component: VentasComponent
    },
    //Ventas/add
    {
      path: 'ventas/add',
      component: VentasFormComponent
    },
    //Ventas/edit/:id
    {
      path: 'ventas/edit/:id',
      component: VentasFormComponent
    },
    //Facturacion
    {
      path: 'facturacion',
      component: FacturacionComponent
    },
    //Usuarios
    {
      path: 'usuarios',
      component: UsuariosComponent
    },
    //Usuarios/add
    {
      path: 'usuarios/add',
      component: UsuariosFormComponent
    },
    //Usuarios/edit/:id
    {
      path: 'usuarios/edit/:id',
      component: UsuariosFormComponent
    },
    //Trabajadores
    {
      path: 'trabajadores',
      component: TrabajadoresComponent
    }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ClientesComponent,
    ClientFormComponent,
    ProductsComponent,
    ProductFormComponent,
    EntradasComponent,
    EntradasFormComponent,
    SucursalesComponent,
    SucursalesFormComponent,
    VentasComponent,
    VentasFormComponent,
    FacturacionComponent,
    UsuariosComponent,
    UsuariosFormComponent,
    TrabajadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas, {
      //opciones extra de ruteo
      //para debug de las rutas en console
      enableTracing: true
    })
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
