import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { Module1RoutingModule } from './module1-routing.module';
import { Componente1Component } from './componente1/componente1.component';



@NgModule({
  declarations: [
    Componente1Component
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    FormsModule,
    MatIconModule,
 
  ]
})
export class Module1Module { }
