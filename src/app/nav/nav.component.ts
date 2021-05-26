import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  borrarfilto(){
const filtro='';
  }
  
  Travelfiltro(){
const filtro='Travel';
  }

lifeFiltro(){
const filtro='lifestyle';
}
BussinesFiltro(){
const filtro='business';
}
}
