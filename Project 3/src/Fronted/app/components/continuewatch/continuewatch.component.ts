import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-continuewatch',
  templateUrl: './continuewatch.component.html',
  styleUrls: ['./continuewatch.component.css']
})
export class ContinuewatchComponent implements OnInit {

  public continuedata:any;
  public formatted:any;
  public mobile:boolean;


  constructor(private config: NgbCarouselConfig) { }

  ngOnInit(): void {
    this.fetchData();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      this.config.showNavigationIndicators = false;
    }
  }
  
  fetchData(){
    
    this.continuedata = JSON.parse(localStorage.getItem('continue'));
    this.formatted = [];
    var j = -1;
    if(this.continuedata !== null){
      if(this.continuedata.length < 25){
      for (var i = 0; i < this.continuedata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.formatted[j] = [];
          this.formatted[j].push(this.continuedata[i]);
      }
      else {
          this.formatted[j].push(this.continuedata[i]);
      }
    }
    }

    if(this.continuedata.length > 24){
      for (var i = 0; i < 24; i++) {
        if (i % 6 == 0) {
            j++;
            this.formatted[j] = [];
            this.formatted[j].push(this.continuedata[i]);
        }
        else {
            this.formatted[j].push(this.continuedata[i]);
        }
      }
    }
    }
  }
}
