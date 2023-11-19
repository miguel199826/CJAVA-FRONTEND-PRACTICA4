import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'component1', component: Componente1Component },
      // Otras rutas específicas del módulo 1
        { path: '', redirectTo: 'component1', pathMatch: 'full' }

    ]
  },
  // Otras rutas principales si es necesario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
