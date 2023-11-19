import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module3',
    loadChildren: () => import('./module3/module3.module').then(m => m.Module3Module)
  },
  { path: '', redirectTo: 'module3', pathMatch: 'full' },
  { path: '**', redirectTo: 'module3' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
