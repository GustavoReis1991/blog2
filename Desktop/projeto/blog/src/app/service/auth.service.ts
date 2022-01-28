import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token),
  };
  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set("Authorization", environment.token),
    };
  }
  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://blogiron2.herokuapp.com/usuarios/cadastrar',usuario)
  }
  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogiron2.herokuapp.com/usuarios/${id}`)
  }

  entrar(userLogin: Login): Observable<Login> {
    return this.http.post<Login>("https://blogiron2.herokuapp.com/usuarios/logar", userLogin)
  }

  logado(){
    let ok: boolean = false;
    if (environment.token != ""){
      ok = true
    }

    return ok
  }



}
