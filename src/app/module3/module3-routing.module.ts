import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'module1',
        loadChildren: () => import('../module1/module1.module').then(m => m.Module1Module)
      },
      {
        path: 'module2',
        loadChildren: () => import('../module2/module2.module').then(m => m.Module2Module)
      },
      { path: '', redirectTo: 'module1', pathMatch: 'full' }
    ]
  },
  // Otras rutas específicas del Module3 si es necesario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
