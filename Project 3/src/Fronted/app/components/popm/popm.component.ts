import { Component, OnInit } from '@angular/core';
import { PopmService } from '../../services/popm.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popm',
  templateUrl: './popm.component.html',
  styleUrls: ['./popm.component.css'],
  providers: [NgbCarouselConfig]
})
export class PopmComponent implements OnInit {

  public popmdata:any;
  public formatted:any;
  public mobile:boolean;

  constructor(private popmService:PopmService,private config: NgbCarouselConfig){}

  ngOnInit(): void{
    this.fetchData();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      this.config.showNavigationIndicators = false;
    }
  }

  fetchData(){
    this.popmService.getAllPop().subscribe(res =>{
    this.popmdata = res;
    this.formatted = [];
    var j = -1;
    for (var i = 0; i < this.popmdata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.formatted[j] = [];
          this.formatted[j].push(this.popmdata[i]);
      }
      else {
          this.formatted[j].push(this.popmdata[i]);
      }
    }
    });
  }


}
