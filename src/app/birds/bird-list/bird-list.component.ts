import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

import { Birds } from '../model/birds';
import { BirdsService } from '../service/birds.service';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {

  birds$: Observable<Birds[]>;
  displayedColumns = ['species', 'namePtBr', 'nameEng', 'color', 'actions']
  // birdData:Array<any> = [];

  constructor(
    private birdsService:BirdsService,
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute
    ) {

    this.birds$ = this.birdsService.getAllBirds()
    .pipe(
      catchError(error =>{
        this.onError('Erro ao carregar lista de aves.')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
