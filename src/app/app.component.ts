import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoBergamo2';

 getVal(){
  return 2;}

  htmlString = '<div><p>Prova</div></p>';
  
  
}
