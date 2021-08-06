import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvreviewService {

  constructor(private httpClient: HttpClient) { }

  getAllTvreview(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/tvreview/"+id;
    return this.httpClient.get(URL);
  }
}
