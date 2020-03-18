import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
