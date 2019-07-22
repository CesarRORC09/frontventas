import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario={
    username:"",
    password:""
  }
  constructor(
    private _us:UsuarioService,
    private router:Router)
    { }

  ngOnInit() {
  }

  ingresar(){
    this._us.login(this.usuario).subscribe(
    datos=>{
     
      if(datos.ok){
        console.log(datos);
        localStorage.setItem("token",datos.token);
        this.router.navigate(["usuario"]);
      }else{
        alert(datos.mensaje)
      }
    },
    err=>{
    alert(err.error.mensaje)
    });
  }
}
