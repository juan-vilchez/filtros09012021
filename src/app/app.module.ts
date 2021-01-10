import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { Pipelab14Pipe } from './pipelab14.pipe';
import { SoladolarPipe } from './soladolar.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    FlyingHeroesPipe, 
    Pipelab14Pipe, 
    SoladolarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
