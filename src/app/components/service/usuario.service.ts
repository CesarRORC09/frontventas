import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {Global} from './global';
import { Usuario } from 'src/app/model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url = Global.url;

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
     'Authorization':localStorage.getItem("token")
    })
  }
  constructor(
    private _http : HttpClient
  ) { }

  guardar(usuario: Usuario): Observable<any>{
    let params=JSON.stringify(usuario);
    return this._http.post(this.url+'saveCliente',params,this.httpOptions);
  }
  buscar(id):Observable<any>{
    return this._http.get(this.url+'getCliente/'+id,this.httpOptions);
  }
  listar(): Observable<any>{
    

    return this._http.get(this.url+'getClientes',this.httpOptions);
  }
  login(usuario):Observable<any>{
     return this._http.post(`${this.url}login`,usuario);
  }
  eliminar(id):Observable<any>{
    return this._http.delete(this.url+'deleteCliente/'+id,this.httpOptions);
  }
  editar(usuario):Observable<any>{
    var params=JSON.stringify(usuario);
    return this._http.put(this.url+'updateCliente/'+usuario._id,params,this.httpOptions);
  }
}
