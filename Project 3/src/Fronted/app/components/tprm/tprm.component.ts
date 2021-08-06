import { Component, OnInit } from '@angular/core';
import { TprmService } from '../../services/tprm.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tprm',
  templateUrl: './tprm.component.html',
  styleUrls: ['./tprm.component.css']
})
export class TprmComponent implements OnInit {

  public tprmdata:any;
  public formatted:any;
  public mobile:boolean;

  constructor(private tprmService:TprmService,private config: NgbCarouselConfig){}

  ngOnInit(): void{
    this.fetchData();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      this.config.showNavigationIndicators = false;
    }
  }

  fetchData(){
    this.tprmService.getAllTpr().subscribe(res =>{
    this.tprmdata = res;
    this.formatted = [];
    var j = -1;
    for (var i = 0; i < this.tprmdata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.formatted[j] = [];
          this.formatted[j].push(this.tprmdata[i]);
      }
      else {
          this.formatted[j].push(this.tprmdata[i]);
      }
    }
    });
  }

}
