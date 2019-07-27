import {Router, Routes} from '@angular/router'
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { VentaComponent } from './venta/venta.component';

export const appRoutes: Routes = [
    { path: 'usuario', component: UsuarioComponent },
    { path: 'venta/:id', component: VentaComponent },
    { path: 'producto',component:  ProductoComponent},
    { path: 'home',component:  HomeComponent},
    { path: 'productos',component:  ProductosComponent},
    { path: 'contacto',component:  ContactoComponent},
    { path: 'login',component:  LoginComponent},
    { path: 'carrito',component:  CarritoComponent},
    { path: 'detalleProducto/:id',component:  DetalleComponent},
    {path: 'registro', component:RegistroComponent},
    {path: 'perfil/:id', component:PerfilComponent},
    { path: '**', component: HomeComponent }
    
  ];
  