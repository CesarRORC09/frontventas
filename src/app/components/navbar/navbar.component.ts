import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usrStatus: boolean;
  
  

  constructor(private _uS:UsuarioService, private _router:Router) { }

  public id:string=localStorage.getItem("id");
  public estado:string=null;
  
  ngOnInit() {
    this.estado=localStorage.getItem("estado")
console.log("estado:",this.estado);
    
this.onLogin();

  }
  onLogout(){
    this.usrStatus=false;
    this._uS.logout();
    console.log(localStorage);
    this._router.navigate(["/login"]);
   
   

  }
  onLogin(){
    this.usrStatus=true;
    console.log(this.usrStatus)
    console.log("login");
   
  }


}
