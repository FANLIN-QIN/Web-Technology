import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendtvService {

  constructor(private httpClient: HttpClient) { }

  getAllTrendtv(){
    let URL = "https://sample666.wn.r.appspot.com//apis/trendtv"
    return this.httpClient.get(URL);
  }
}
