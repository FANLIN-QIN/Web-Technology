import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CastexService {

  constructor(private httpClient: HttpClient) { }

  getAllCastex(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/castex/"+id;
    return this.httpClient.get(URL);
  }
}
