import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from '../service/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import{Global} from '../service/global'


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  public producto:Producto;
  public url:string;

  constructor(private _pS:ProductoService,private _router:Router,
    private _route:ActivatedRoute) { 
      this.url=Global.url
    }

  ngOnInit() {
    this._route.params.subscribe(reg=>{
      let i=reg.id;
      this.buscar(i);
    })
  }
  buscar(id){
    this._pS.buscar(id).subscribe(reg=>{
      console.log(reg);
      this.producto=reg.producto;
    },err=>{
      console.log(err)
    })
  }

}
