import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente2Component } from './componente2/componente2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'component2', component: Componente2Component },
      // Otras rutas específicas del módulo 2
    ]
  },
  // Otras rutas principales si es necesario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
