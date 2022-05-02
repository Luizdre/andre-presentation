import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechCardComponent } from './tech-card/tech-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
    TechCardComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
