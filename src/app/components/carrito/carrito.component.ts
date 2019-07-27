import { Component, OnInit , Input} from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from '../service/producto.service';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { VentaService } from '../service/venta.service';
import { Router } from '@angular/router';


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
  venta={
    cliente:"",
    productos:[],
    total:0
  }

  constructor(private _pS:ProductoService,private _uS:UsuarioService,private _vS:VentaService,private _router:Router) { }

  public id=localStorage.getItem("id");
  ngOnInit() {
    console.log("carrito-component",this.carrito);
    
    this.buscarUsr(this.id);
    this.total=this.sumar();
    console.log(this.total)
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
  
  }
  sumar():number{
    let i=0;
    let total=0;
    for( i=0;i<this.carrito.length;i++){
      total+=Number((this.carrito[i].cantidad)*(this.carrito[i].producto.precio));
    }
    return total;   
  }
  agregar(){
    this.venta.cliente=this.id;
    this.venta.productos=this.carrito;
    this.venta.total=this.total
  }

  guardarVenta(){
    this.agregar();
    console.log(this.venta);
    this._vS.guardar(this.venta).subscribe((reg)=>{
      if(reg){
        console.log(reg)
          alert("compra existosa");
          this._router.navigate(["venta/"+reg._id]);
      }  
    },(err)=>{
      console.log(err)
    });
    
  }
  eliminar(j){
    this.carrito.splice(j,1);
  }




}
