import { Component, OnInit } from '@angular/core';
import { TrendtvService } from '../../services/trendtv.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trendtv',
  templateUrl: './trendtv.component.html',
  styleUrls: ['./trendtv.component.css']
})
export class TrendtvComponent implements OnInit {

  public trendtvdata:any;
  public formatted:any;
  public mobile:boolean;

  constructor(private trendtvService:TrendtvService,private config: NgbCarouselConfig){}

  ngOnInit(): void{
    this.fetchData();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      this.config.showNavigationIndicators = false;
    }
  }

  fetchData(){
    this.trendtvService.getAllTrendtv().subscribe(res =>{
    this.trendtvdata = res;
    this.formatted = [];
    var j = -1;
    for (var i = 0; i < this.trendtvdata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.formatted[j] = [];
          this.formatted[j].push(this.trendtvdata[i]);
      }
      else {
          this.formatted[j].push(this.trendtvdata[i]);
      }
    }
    });
  }

}
