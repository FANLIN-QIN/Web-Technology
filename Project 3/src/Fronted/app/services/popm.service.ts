import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopmService {

  constructor(private httpClient: HttpClient) { }

  getAllPop(){
    let URL = "https://sample666.wn.r.appspot.com//apis/popmovie"
    return this.httpClient.get(URL);
  }
}
