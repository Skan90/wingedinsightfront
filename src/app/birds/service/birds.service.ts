import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Birds } from '../model/birds';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class BirdsService {

  private API = "https://wingedinsight.herokuapp.com/api/v1/bird";

  constructor(private _http:HttpClient) { }

  getAllBirds() {
    return this._http.get<Birds[]>(this.API)
    .pipe(
      first(),
      tap(birdList => console.log(birdList))
      );
    }

  }
