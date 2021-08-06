import { Component, OnInit } from '@angular/core';
import { TprtvService } from '../../services/tprtv.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tprtv',
  templateUrl: './tprtv.component.html',
  styleUrls: ['./tprtv.component.css']
})
export class TprtvComponent implements OnInit {

  public tprtvdata:any;
  public formatted:any;
  public mobile:boolean;

  constructor(private tprtvService:TprtvService,private config: NgbCarouselConfig){}

  ngOnInit(): void{
    this.fetchData();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      this.config.showNavigationIndicators = false;
    }
  }

  fetchData(){
    this.tprtvService.getAllTprtv().subscribe(res =>{
    this.tprtvdata = res;
    this.formatted = [];
    var j = -1;
    for (var i = 0; i < this.tprtvdata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.formatted[j] = [];
          this.formatted[j].push(this.tprtvdata[i]);
      }
      else {
          this.formatted[j].push(this.tprtvdata[i]);
      }
    }
    });
  }

}
