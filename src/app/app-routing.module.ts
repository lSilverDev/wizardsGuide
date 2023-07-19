import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElixirsComponent } from './pages/elixirs/elixirs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HousesComponent } from './pages/houses/houses.component';

const routes: Routes = [
  {
    path: '',
    component: ElixirsComponent
  },
  {
    path: 'elixirs',
    component: ElixirsComponent
  },
  {
    path: 'houses',
    component: HousesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
