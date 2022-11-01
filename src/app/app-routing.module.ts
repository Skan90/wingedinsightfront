import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'birds',
    loadChildren: () => import('./birds/birds.module').then(m => m.BirdsModule)
  },
  {
    path:'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path:'sightings',
    loadChildren:() => import('./sightings/sightings.module').then(m => m.SightingsModule)
  },
  {
    path:'users',
    loadChildren:() => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

// Used only after declaration
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
