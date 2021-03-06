import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import {CiclovitaComponent} from './ciclovita/ciclovita.component';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { RatingComponent } from './rating/rating.component';


const appRoutes: Routes=[
  {path:'primo', component: PrimoComponent,data:{title:"Primo"}},
  {path:'primo-diverso', component:PrimoComponent,data:{title:"Primo Diverso"}},
  {path:'secondo',component:SecondoComponent},
  {path:'ciclo-vita',component:CiclovitaComponent},
  {path:'template-form', component:TemplateFormComponent},
  {path: 'reactive-form',component:ReactiveFormComponent},
  {path:'', redirectTo:'primo',pathMatch:'full'},
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent,
    CiclovitaComponent,
    PageNotFoundComponent,
    MenuComponent,
    HighlightDirective,
    UnlessDirective,
    ExponentialStrengthPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    RatingComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }