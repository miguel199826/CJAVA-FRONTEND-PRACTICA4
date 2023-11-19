import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { FormsModule } from '@angular/forms';

//import { Module1Module } from '../module1/module1.module';
//import { Module2Module } from '../module2/module2.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Module3RoutingModule,
    FormsModule
 
   // Module1Module,
    //Module2Module
  ]
})
export class Module3Module { }
