import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MreviewService {

  constructor(private httpClient: HttpClient) { }

  getAllMreview(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/mreview/"+id;
    return this.httpClient.get(URL);
  }
}
