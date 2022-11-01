import { Component, OnInit } from '@angular/core';
import { BirdsService } from './birds.service';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {


  birdData:Array<any> = [];

  constructor(
    private birdsService:BirdsService
    ){
    this.birdsService.getAllBirds().subscribe(
      (response)=>{
        console.log(response);
<<<<<<< Updated upstream
        this.birdData = response;
=======
          this.birdData = response;
>>>>>>> Stashed changes
      }
    )
  }
  ngOnInit(): void {
  }

}
