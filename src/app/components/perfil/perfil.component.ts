import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public usuario:Usuario;

  constructor(private _route:ActivatedRoute,private _uS:UsuarioService) { }

  ngOnInit() {
    this._route.params.subscribe(reg=>{
      console.log("xx",reg)
      let id=reg.id;
      console.log(id);
      this.buscarPerfil(id);
      console.log(localStorage);
      this.comprobarlog()
    })
  }
  buscarPerfil(id:any){
    this._uS.buscar(id).subscribe(reg=>{
      console.log(reg);
      this.usuario=reg.cliente;
      console.log('xxx',this.usuario)
    },err=>{
      console.log(err)
    })
  }
  comprobarlog(){
    if(localStorage){
      return true;
    }
  }

  

}
