import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvvedioService {

  constructor(private httpClient: HttpClient) { }

  getAllTvvedio(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/tvvedio/"+id;
    return this.httpClient.get(URL);
  }
}
