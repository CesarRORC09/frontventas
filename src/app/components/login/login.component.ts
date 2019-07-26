import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userStatus:string;
  usuario={
    email:"",
    password:""
  }
  constructor(
    private _us:UsuarioService,
    private router:Router)
    { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.usuario)
    this._us.login(this.usuario).subscribe(
    datos=>{
     
      if(datos.ok){
        console.log(datos);
        localStorage.setItem("token",datos.token);
        this.router.navigate(["perfil/"+datos.cliente._id]);

      }else{
        alert(datos.mensaje)
      }
    },
    err=>{
    alert(err.error.mensaje)
    });
  }
}
