import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvcastService {

  constructor(private httpClient: HttpClient) { }

  getAllTvcast(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/tvcast/"+id;
    return this.httpClient.get(URL);
  }
}
