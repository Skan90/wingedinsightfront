import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { BirdCardComponent } from './bird-card/bird-card.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdsRoutingModule } from './birds-routing.module';

@NgModule({
  declarations: [
    BirdListComponent,
    BirdCardComponent,

  ],
  imports: [
    CommonModule,
    BirdsRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    SharedModule
  ],
})
export class BirdsModule { }
