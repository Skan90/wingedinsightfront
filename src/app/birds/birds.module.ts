import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { BirdCardComponent } from './bird-card/bird-card.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdsRoutingModule } from './birds-routing.module';
import { BirdsFormComponent } from './birds-form/birds-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BirdListComponent,
    BirdCardComponent,
    BirdsFormComponent,

  ],
  imports: [
    CommonModule,
    BirdsRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
  ],
})
export class BirdsModule { }
