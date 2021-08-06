import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendmService {

  constructor(private httpClient: HttpClient) { }

  getAllTrend(){
    let URL = "https://sample666.wn.r.appspot.com//apis/trendmovie"
    return this.httpClient.get(URL);
  }
}
