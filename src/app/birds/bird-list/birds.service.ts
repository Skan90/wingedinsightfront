import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

@Injectable()
export class BirdsService {

  constructor(private _http:HttpClient) { }

  getAllBirds() :Observable<any> {
    return this._http.get("https://wingedinsight.herokuapp.com/api/v1/bird");
  }


}
