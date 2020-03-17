import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
title = 'DemoBergamo2';

  //property binding
 getVal(){
  return 2;}

  htmlString='<div><p>Prova</div></p>';
  
  linkUrl='https://google.it';
  
  @Input()
  titoloInput:string; //creo una variabile 
  constructor() { }

  ngOnInit(): void {
  }

}
