import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Componente2Component } from './componente2/componente2.component';


@NgModule({
  declarations: [
    Componente2Component
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
