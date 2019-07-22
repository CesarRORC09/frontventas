import {Router, Routes} from '@angular/router'
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
    { path: 'usuario', component: UsuarioComponent },
    { path: '',component:  LoginComponent},
    { path: '**', component: LoginComponent }
  ];
  