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
      let i=reg.id;
      this.buscar(i);
    })
  }
  buscar(id){
    this._uS.buscar(id).subscribe(reg=>{
      console.log(reg);
      this.usuario=reg;
    },err=>{
      console.log(err)
    })
  }

}
