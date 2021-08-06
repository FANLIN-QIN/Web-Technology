import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoptvService {

  constructor(private httpClient: HttpClient) { }

  getAllPoptv(){
    let URL = "https://sample666.wn.r.appspot.com//apis/poptv"
    return this.httpClient.get(URL);
  }
}
