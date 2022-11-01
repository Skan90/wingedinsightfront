import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { BirdsRoutingModule } from './birds-routing.module';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdCardComponent } from './bird-card/bird-card.component';

// Material
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BirdListComponent,
    BirdCardComponent
  ],
  imports: [
    CommonModule,
    BirdsRoutingModule,
    HttpClientModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule

  ]
})
export class BirdsModule { }
