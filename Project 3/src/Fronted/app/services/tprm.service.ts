import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TprmService {

  constructor(private httpClient: HttpClient) { }

  getAllTpr(){
    let URL = "https://sample666.wn.r.appspot.com//apis/tprmovie"
    return this.httpClient.get(URL);
  }
}
