import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Login } from '../model/login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin: Login = new Login()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userlogin).subscribe((resp: Login)=>{
      this.userlogin=resp
      environment.token = this.userlogin.token
      environment.foto = this.userlogin.foto
      environment.id = this.userlogin.id
      environment.nome = this.userlogin.nome

      this.router.navigate(["/inicio"])
    }, erro=>{
      if (erro.status == 500){
        alert("Usuário ou senha incorretos")
      }
    })
  }

}
