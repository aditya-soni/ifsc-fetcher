import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputScreenComponent } from './input-screen/input-screen.component';
import { DisplayScreenComponent } from './display-screen/display-screen.component';
import { IfscService } from './ifsc.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    InputScreenComponent,
    DisplayScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [IfscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
