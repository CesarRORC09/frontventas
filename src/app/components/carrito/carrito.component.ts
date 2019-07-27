import { Component, OnInit , Input} from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from '../service/producto.service';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public usuario:Usuario;
  

  productos:Array<Producto>=[];
  public carrito:Array<any>=this._pS.mostrarCarrito();
  public total:number;

  constructor(private _pS:ProductoService,private _uS:UsuarioService) { }

  ngOnInit() {
    console.log("carrito-component",this.carrito);
    let id=localStorage.getItem("id");
    this.buscarUsr(id);
  }
  buscarUsr(id){
    this._uS.buscarPerfil(id).subscribe(
      reg=>{
        console.log(reg);
        this.usuario=reg.cliente;
        console.log(this.usuario);
      },
      err=>{
        console.log("no se encontro");
      }
    );
    this.total=this.sumar();
    console.log(this.total)
  }
  sumar():number{
    let i=0;
    let x=0;
    for( i=0;i<this.carrito.length;i++){
      x+=Number((this.carrito[i].cantidad)*(this.carrito[i].producto.precio));
    }
    return x;

    
  }




}
