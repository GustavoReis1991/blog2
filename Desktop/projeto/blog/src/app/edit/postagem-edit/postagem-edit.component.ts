import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/postagem';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {

    if( environment.token == ''){
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }

}
