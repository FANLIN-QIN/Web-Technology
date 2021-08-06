import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class McastService {

  constructor(private httpClient: HttpClient) { }

  getAllMcast(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/mcast/"+id;
    return this.httpClient.get(URL);
  }
}
