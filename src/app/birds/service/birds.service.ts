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

  constructor(private httpClient:HttpClient) { }

  getAllBirds() {
    return this.httpClient.get<Birds[]>(this.API)
    .pipe(
      first(),
      tap(birdList => console.log(birdList))
      );
    }

    save(record: Birds){
      return this.httpClient.post<Birds>(this.API, record).pipe(first());
    }
  }
