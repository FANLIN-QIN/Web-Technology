import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MvedioService {

  constructor(private httpClient: HttpClient) { }

  getAllMvedio(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/mvedio/"+id;
    return this.httpClient.get(URL);
  }
}
