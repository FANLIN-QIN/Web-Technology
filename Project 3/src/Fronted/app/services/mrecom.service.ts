import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MrecomService {

  constructor(private httpClient: HttpClient) { }

  getAllMrecom(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/mrecom/"+id;
    return this.httpClient.get(URL);
  }
}
