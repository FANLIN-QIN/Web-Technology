import { Component, OnInit } from '@angular/core';
import { TrendmService } from '../../services/trendm.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trendm',
  templateUrl: './trendm.component.html',
  styleUrls: ['./trendm.component.css']
})
export class TrendmComponent implements OnInit {

  public trendmdata:any;
  public formatted:any;
  public mobile:boolean;

  constructor(private trendmService:TrendmService,private config: NgbCarouselConfig){}

  ngOnInit(): void{
    this.fetchData();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      this.config.showNavigationIndicators = false;
    }
  }

  fetchData(){
    this.trendmService.getAllTrend().subscribe(res =>{
    this.trendmdata = res;
    this.formatted = [];
    var j = -1;
    for (var i = 0; i < this.trendmdata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.formatted[j] = [];
          this.formatted[j].push(this.trendmdata[i]);
      }
      else {
          this.formatted[j].push(this.trendmdata[i]);
      }
    }
    });
  }

}
