/*import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  clickEvent(ev:MouseEvent,param: number){
    if(param===2){
    
    this.testo='Default';
  }
    alert('ho cliccato il pulsante'+param);
    ev.stopPropagation();
  }
  testo: string='Iniziare';
  //inputEvent(ev){ lo sposto in s
  //  this.testo=ev.target.value;
  //}
}
*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  testo: string = 'Iniziale';

  @Output()
  myClick: EventEmitter<string>= new EventEmitter();



  clickEvent(ev: MouseEvent, param: number){
    if(param === 2){
      this.myClick.emit(this.testo);
      this.testo = 'Default';
    }
    console.log('ho cliccato il pulsante: '+param);
    ev.stopPropagation();
  }
  


  inputEvent(ev){
    this.testo = ev.target.value;
  }

}
