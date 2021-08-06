import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvsimilarService {

  constructor(private httpClient: HttpClient) { }

  getAllTvsimilar(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/tvsimilar/"+id;
    return this.httpClient.get(URL);
  }
}
