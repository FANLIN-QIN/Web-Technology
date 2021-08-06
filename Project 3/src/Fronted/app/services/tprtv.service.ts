import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TprtvService {
  constructor(private httpClient: HttpClient) { }

  getAllTprtv(){
    let URL = "https://sample666.wn.r.appspot.com//apis/tprtv"
    return this.httpClient.get(URL);
  }
}
