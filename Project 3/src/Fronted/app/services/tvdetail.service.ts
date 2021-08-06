import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvdetailService {

  constructor(private httpClient: HttpClient) { }

  getAllTvdetail(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/tvdetail/"+id;
    return this.httpClient.get(URL);
  }
}
