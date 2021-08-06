import { Component, OnInit } from '@angular/core';
import { PoptvService } from '../../services/poptv.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poptv',
  templateUrl: './poptv.component.html',
  styleUrls: ['./poptv.component.css']
})
export class PoptvComponent implements OnInit {

  public poptvdata:any;
  public formatted:any;
  public mobile:boolean;

  constructor(private poptvService:PoptvService,private config: NgbCarouselConfig){}

  ngOnInit(): void{
    this.fetchData();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      this.config.showNavigationIndicators = false;
    }
  }

  fetchData(){
    this.poptvService.getAllPoptv().subscribe(res =>{
    this.poptvdata = res;
    this.formatted = [];
    var j = -1;
    for (var i = 0; i < this.poptvdata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.formatted[j] = [];
          this.formatted[j].push(this.poptvdata[i]);
      }
      else {
          this.formatted[j].push(this.poptvdata[i]);
      }
    }
    });
  }

}
