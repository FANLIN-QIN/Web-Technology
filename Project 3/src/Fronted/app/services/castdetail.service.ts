import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CastdetailService {

  constructor(private httpClient: HttpClient) { }

  getAllCastde(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/castdetail/"+id;
    return this.httpClient.get(URL);
  }
}
