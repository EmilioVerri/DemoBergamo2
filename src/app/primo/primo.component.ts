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
  

  lista = [1,2,5,6];

  constructor(){
    //const a = this.lista[2];
  }

  ngOnInit(): void {
  }
 
  getCosa(){
    //this.htmlString='ciao';
   // return this.title;
  }

myDate: Date= new Date();

oggetto: {chiave:string};

oggetto1:{chiave:string}=
{chiave:'valoreChiave'};

}

