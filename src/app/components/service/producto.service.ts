import { Injectable } from '@angular/core';
import {Global} from './global';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/model/producto';
import { Venta } from 'src/app/model/venta';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public url=Global.url;
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
     //-para aurotizacion por medio del token- 'Authorization':localStorage.getItem("token")
    })
  }
  constructor(private _http:HttpClient) { }

  guardar(producto:Producto):Observable<any> {
    var params=JSON.stringify(producto);
    return this._http.post(this.url+"saveProducto",params,this.httpOptions);
  }
  guardarVenta(venta:Venta):Observable<any>{
    var params=JSON.stringify(venta);
    return this._http.post(this.url+'saveVenta',params,this.httpOptions);
  }
  listar(): Observable<any>{
    return this._http.get(this.url+'getProductos',this.httpOptions);
  }
  eliminar(id):Observable<any>{
    return this._http.delete(this.url+'deleteProducto/'+id,this.httpOptions);
  }
  buscar(id):Observable<any>{
    return this._http.get(this.url+'getProducto/'+id,this.httpOptions);
  }
  editar(producto):Observable<any>{
    var params=JSON.stringify(producto);
    return this._http.put(this.url+'updateProducto/'+producto._id,params,this.httpOptions);
  }
 }
