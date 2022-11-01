import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdCardComponent } from './bird-card/bird-card.component';
import { BirdListComponent } from './bird-list/bird-list.component';

const routes: Routes = [
  {
    path:'',
    component: BirdListComponent
  },
  {
    path:'info',
    component: BirdCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirdsRoutingModule { }
