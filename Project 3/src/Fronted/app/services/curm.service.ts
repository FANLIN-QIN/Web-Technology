import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurmService {

  constructor(private httpClient: HttpClient) { }

  getAllPost(){
    let URL = "https://sample666.wn.r.appspot.com//apis/curmovie"
    return this.httpClient.get(URL);
  }
}
