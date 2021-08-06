import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MdetailService {

  constructor(private httpClient: HttpClient) { }

  getAllMdetail(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/mdetail/"+id;
    return this.httpClient.get(URL);
  }
}
