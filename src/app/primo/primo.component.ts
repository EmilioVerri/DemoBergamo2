import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-primo',
  templateUrl:'./primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
lista:string[]=['stringa1','stringa2','stringa3'];


  toggleStyle:boolean=true;

  get myStyles(){
    return{
      colorRed:this.toggleStyle,
      boldStyle: !this.toggleStyle
    };
  }
title = 'DemoBergamo2';

  //property binding
 getVal(){
  return 2;}

  htmlString='<div><p>Prova</div></p>';
  
  linkUrl='https://google.it';
  
  @Input('parametroInput')
  titoloInput:string; //creo una variabile 
  

  //lista = [1,2,5,6];

  constructor(){
    //si può definire un solo costruttore per classe
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

