import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getMulsearch(id:string){
    let URL = "https://sample666.wn.r.appspot.com//apis/search/" + id;
    return this.httpClient.get<{id: number,title: string, backdrop_path: string, media_type: string, }[]>(URL);
  }
}
