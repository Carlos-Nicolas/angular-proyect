import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  categorias =["travel","busines","lifeStyle"];

  posts:any ;
 
  constructor(private appService:AppService
  ) { }

 
  ngOnInit(): void {

 this.appService.getPosts().subscribe(posts=> this.posts = posts)

  }
 gotopost(){
   
 }
/*
  const PostSchema = new Schema({
    id:{type:number, require: true},
    title:{ type: String, require:true},
    shortdescription:{ type:String, require:true},
    description:{type:String, require:true}
    category:{type:Array, require:true},
    image:{type:String, require:true}
  });

  const categorias{
    [travel,cussines,lifestyle];
 }
 */

 obtenerDatos(){
  var request = new XMLHttpRequest();

  request.open('GET', 'https://private-anon-aebde7bba1-postsmock.apiary-mock.com/posts');
  
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };
  request.send();
 }

 editPost(){
  var request = new XMLHttpRequest();

  request.open('PUT', 'https://private-anon-aebde7bba1-postsmock.apiary-mock.com/posts/id');
  
  request.setRequestHeader('Content-Type', 'application/json');
  
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };
  
  var body = {
    'title': 'The waves are high & beautiful',
    'category': 'travel',
    'short_description': 'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella',
    'description': 'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.'
  };
  
  request.send(JSON.stringify(body));
  
}

deletePost(){
  var request = new XMLHttpRequest();

request.open('DELETE', 'https://private-anon-aebde7bba1-postsmock.apiary-mock.com/posts/id');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
}

borrarfilto(){
  const filtro=['Travel','lifestyle','business'];
    }
    
    Travelfiltro(){
  const filtro=['Travel'];
    }
  
  lifeFiltro(){
  const filtro=['lifestyle'];
  }
  BussinesFiltro(){
  const filtro=['business'];
  }



}
