import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MsimilarService {

  constructor(private httpClient: HttpClient) { }

  getAllMsimilar(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/msimilar/"+id;
    return this.httpClient.get(URL);
  }
}
