import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MainBlockComponent } from './main-block/main-block.component';


@NgModule({
  declarations: [
    AppComponent,
    MainBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MainBlockComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
