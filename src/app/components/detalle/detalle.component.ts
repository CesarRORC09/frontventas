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
  public cantidad:number;
  public url:string;
  

  constructor(private _pS:ProductoService,private _router:Router,
    private _route:ActivatedRoute) { 
      this.url=Global.url
    }

  ngOnInit() {
    this._route.params.subscribe(reg=>{
      var i=reg.id;
      this.buscar(i);
    });

  }
  buscar(id){
    this._pS.buscar(id).subscribe(reg=>{
      console.log(reg);
      this.producto=reg;
    },err=>{
      console.log(err)
    })
  }
  addCarrito(){
    
    this._pS.agregarProducto(this.producto,this.cantidad);
    alert("se ha agregado "+this.cantidad+" "+this.producto.nombre+" al carrito");
    
  }

}
