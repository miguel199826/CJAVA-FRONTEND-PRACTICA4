import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importa los módulos creados
//import { Module1Module } from './module1/module1.module';
//import { Module2Module } from './module2/module2.module';
//import { Module3Module } from './module3/module3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
