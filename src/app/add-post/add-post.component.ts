import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor() { 

    
  }

  ngOnInit():void {
   
   
  }
  
  //categorias=["travel","Bussines", "lifeStyles"]; 
  
public categorias =[
  {travel:String},
  {lifestyle:String},
  {business:String}
]

 public Postform = {
   id:Number,
   title:String,
   description:String,
   category:String,
   urlImg:String
 }

 cerrarventana(){

 }

 enviarPost(){

 }

 /*
enviarpost(){
  var request = new XMLHttpRequest();

request.open('POST', 'https://private-anon-aebde7bba1-postsmock.apiary-mock.com/posts');

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

*/

}
