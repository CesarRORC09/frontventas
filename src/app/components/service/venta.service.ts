import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  public url:string;
  constructor(public _http:HttpClient) {
    this.url=Global.url;
   }
   httpOptionsAuth ={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
     'Authorization':localStorage.getItem("token")
    })
  }
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  

   guardar(venta):Observable<any>{
    let params=JSON.stringify(venta);
    return this._http.post(this.url+'saveVenta',params,this.httpOptions);
   }

   buscarVenta(id):Observable<any>{
     return this._http.get(this.url+'getVenta/'+id,this.httpOptions);
   }
}
