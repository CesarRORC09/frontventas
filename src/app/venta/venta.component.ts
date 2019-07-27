import { Component, OnInit } from '@angular/core';
import { VentaService } from '../components/service/venta.service';
import { ProductoService } from '../components/service/producto.service';
import { UsuarioService } from '../components/service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  public id_venta:string;
  public id_producto:string;
  public id_usuario:string;
  venta={
    cliente:"",
    productos:[],
    total:0
  }
  public producuto:Producto;
  public productos:Array<Producto>=[];

  constructor(private _vS:VentaService, private _pS:ProductoService, private _uS:UsuarioService,private _rute:ActivatedRoute) { }

  ngOnInit() {
    this._rute.params.subscribe(reg=>{
      this.id_venta=reg.id;
    },
    err=>{
      console.log(err);
    });
    this.buscarVenta(this.id_venta);
  }

  buscarVenta(id){
    this._vS.buscarVenta(id).subscribe(reg=>{
      console.log(reg);
      this.venta=reg;
      console.log(this.venta);

    },
    err=>{
      console.log(err);
    });
  }
  establecerDatosVenta(){
    // this.productos=this.venta.productos;
    // this.id_producto=this.productos.id

  }
  buscarProducto(){

  }

}
