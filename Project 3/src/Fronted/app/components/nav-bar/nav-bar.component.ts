import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import {Observable, OperatorFunction, of} from 'rxjs';
import {debounceTime, switchMap,map} from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  public data:any;
  public mobile:any;
  isNavbarCollapsed=true;

  constructor(private searchService:SearchService){}

  ngOnInit(): void{
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
    }
  }
  search: any = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      switchMap(term => term === ''?[]
        :this.searchService.getMulsearch(term).pipe(
      )
    )
  )

  formatter = (x: {name: string}) => x.name;
      
}
