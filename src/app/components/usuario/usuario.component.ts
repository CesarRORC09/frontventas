import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validator } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import {UsuarioService} from '../service/usuario.service';
import {Router,ActivatedRoute,Params} from '@angular/router';


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
  public titulo:string='Agregar usuario';
  public accion:string='guardar';
  public usuarios:Array<Usuario>=[];
  constructor(private _us : UsuarioService) { }

  ngOnInit() {
    this.listar();
  }
  guardar(){
    
    console.log(this.usuario);
    this._us.guardar(this.usuario).subscribe(
      reg=>{
        console.log(this.accion)
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
  buscar(id){
    this._us.buscar(id).subscribe(reg=>{
      this.titulo='Editar usuario';
        console.log(reg)
        this.usuario=reg.cliente;
        this.accion='editar';
        console.log(this.usuario);
    },
    err=>{
      console.log(err)
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
  eliminar(id){
    this._us.eliminar(id).subscribe(reg=>{
      console.log(reg);
      alert("Usuario eliminado");
      this.listar();
    },err=>{
      console.log(err);
    });
  }
  sobreescibir(){
    
    this._us.editar(this.usuario).subscribe(
      res=>{
        console.log(this.accion);
        console.log(res.usuario);
        alert("Usuario Modificado");
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
        this.accion='guardar';
        this.titulo='Agregar usuario';
        
      },
      err=>{
        console.log(<any>err);
      });
  }
  

}
