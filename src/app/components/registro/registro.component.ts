import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Usuario={
    nombre:"",
    a_paterno:"",
    a_materno:"",
    edad:null,
    username:"",
    email:"",
    password:""
  }
  constructor(private _uS:UsuarioService,private _router:Router ) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.usuario);
    this._uS.guardar(this.usuario).subscribe(reg=>{
      console.log(reg);
      alert("Te has registrado exitosamente");
      this._router.navigate(['/login']);
      
      this.usuario={
        nombre:"",
        a_paterno:"",
        a_materno:"",
        edad:null,
        username:"",
        email:"",
        password:""
      }
    },err=>{
      alert("Error al registrar")
    });
  }

}
