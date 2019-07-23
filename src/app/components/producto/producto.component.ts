import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from '../service/producto.service';
import { UploadImgService } from '../service/upload-img.service';
import { Global } from '../service/global';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public url:string;
  public titulo:string='Agregar producto';
  producto:Producto={
    nombre:"",
    precio:0,
    marca:"",
    descripcion:"",
    no_existencias:0,
    status:"",
    img:""
  }
  public img:Array<File>;
  public productoGuardado;
  public accion:string='guardar';

  public status:string=null;
  public productos:Array<Producto>=[];
  constructor(private _pService:ProductoService, private _upService:UploadImgService) { 
    this.url=Global.url;
  }

  ngOnInit() {
    
    this.listar();
  }
  guardar(){
    console.log(this.producto)
    this._pService.guardar(this.producto).subscribe(
      reg=>{
        console.log(reg);
        console.log(reg.producto._id)
        if(reg.producto){
          this._upService.makeFileRequest(Global.url+"addImgProducto/"+reg.producto._id,[],this.img,'img').then((result:any)=>{
            this.productos=result.productos;
            this.productoGuardado=this.productos;
            console.log(this.productoGuardado);
          alert('Producto agregado');
          this.listar();
          this.producto={
            nombre:"",
            precio:0,
            marca:"",
            descripcion:"",
            no_existencias:0,
            status:"",
            img:""
          }
          });
          }
        
      },err=>{
        alert('Error al guardar');

      });
    
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
  eliminar(id){
    this._pService.eliminar(id).subscribe(reg=>{
      console.log(reg)
      alert('registro eliminado');
      this.listar();
    },err=>{
      console.log(err);
    })
  }

  cargarImg(image:any){
    this.img=<Array<File>>image.target.files;
  }
  buscar(id){
    console.log(id);
    this.accion='editar';
    this.titulo='Editar producto';
    this._pService.buscar(id).subscribe(reg=>{
      console.log(reg);
      this.producto=reg.producto;
      console.log(this.producto);
    },err=>{
      console.log(err);
    });
  }

  sobreescribir(){
      this._pService.editar(this.producto).subscribe(reg=>{
        console.log(reg);
        console.log(reg.producto._id)
        if(reg.producto){
          this._upService.makeFileRequest(Global.url+"addImgProducto/"+reg.producto._id,[],this.img,'img').then((result:any)=>{
            this.productos=result.productos;
            this.productoGuardado=this.productos;
            console.log(this.productoGuardado);
            alert('Producto modificado');
          this.listar();
          this.producto={
            nombre:"",
            precio:0,
            marca:"",
            descripcion:"",
            no_existencias:0,
            status:"",
            img:""
          }
          this.accion='guardar';
          this.titulo='Agregar producto'
          });
          }
      },err=>{
        console.log(err);
        alert('error al editar');
      });
  }
}
