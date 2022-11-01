import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SightingsRoutingModule } from './sightings-routing.module';
import { SightingListComponent } from './sighting-list/sighting-list.component';

// Material components
import { MatTabsModule } from '@angular/material/tabs'


@NgModule({
  declarations: [
    SightingListComponent
  ],
  imports: [
    CommonModule,
    SightingsRoutingModule,

    // Material
    MatTabsModule
  ]
})
export class SightingsModule { }
