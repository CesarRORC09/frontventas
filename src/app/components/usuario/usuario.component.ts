import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validator } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import {UsuarioService} from '../service/usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  
  
  usuario:Usuario={
    nombre:"",
    a_paterno:"",
    a_materno:"",
    edad:null,
    username:"",
    email:"",
    password:""
  }
  public status:string=null;
  public usuarios:Array<Usuario>=[];
  constructor(private _us : UsuarioService) { }

  ngOnInit() {
    this.listar();
  }
  guardar(){
    console.log(this.usuario);
    this._us.guardar(this.usuario).subscribe(
      reg=>{
        console.log(reg);
        alert("Usuario guardado");
        this.usuarios=reg.clientes;
        this.listar();

        this.usuario={
          nombre:"",
          a_paterno:"",
          a_materno:"",
          edad:null,
          username:"",
          email:"",
          password:""
        }
      },
      err=>{
        console.log(err);
        alert("Error al guardar");
      });
  }
  listar(){
    this._us.listar().subscribe(regs=>{
      console.log(regs);
      this.usuarios=regs.clientes;
    },
    err=>{
      console.log(err);
    });
  }

}
