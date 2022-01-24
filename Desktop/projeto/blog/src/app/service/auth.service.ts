import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }
  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://blogiron.herokuapp.com/usuarios/cadastrar',usuario)
  }

  entrar(userLogin: Login): Observable<Login> {
    return this.http.post<Login>("https://blogiron.herokuapp.com/usuarios/logar", userLogin)
  }

  logado(){
    let ok: boolean = false;
    if (environment.token != ""){
      ok = true
    }

    return ok
  }
}
