import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvrecomService {

  constructor(private httpClient: HttpClient) { }

  getAllTvrecom(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/tvrecom/"+id;
    return this.httpClient.get(URL);
  }
}
