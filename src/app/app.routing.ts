import {Router, Routes} from '@angular/router'
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const appRoutes: Routes = [
    { path: 'usuario', component: UsuarioComponent },
    { path: 'producto',component:  ProductoComponent},
    { path: 'home',component:  LoginComponent},
    { path: 'productos',component:  ProductosComponent},
    { path: 'contacto',component:  ContactoComponent},
    { path: 'home',component:  LoginComponent},
    { path: 'getProducto/:id',component:  DetalleComponent},
    { path: '**', component: LoginComponent }
    
  ];
  