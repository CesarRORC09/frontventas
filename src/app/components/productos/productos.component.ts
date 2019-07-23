import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../service/producto.service';
import {Producto} from '../../model/producto';
import {Global} from '../service/global';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos:Producto[];
  public url:string;

  constructor(private _pService: ProductoService) {
    this.url=Global.url;
   }

  ngOnInit() {
    this.listar();
  }
  listar(){
    this._pService.listar().subscribe(regs=>{
      console.log(regs);
      this.productos=regs;
      console.log(this.productos)
    },err=>{
      console.log(err);
    });
  }

}
