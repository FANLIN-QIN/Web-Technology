import { Component, OnInit } from '@angular/core';
import { MvedioService } from '../../services/mvedio.service';
import { MdetailService } from '../../services/mdetail.service';
import { ActivatedRoute, Router} from '@angular/router';
import { McastService} from '../../services/mcast.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CastdetailService} from '../../services/castdetail.service';
import { CastexService} from '../../services/castex.service';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MreviewService} from '../../services/mreview.service';
import{DatePipe}from '@angular/common';
import { MrecomService} from '../../services/mrecom.service';
import { MsimilarService} from '../../services/msimilar.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';







@Component({
  selector: 'app-minfo',
  templateUrl: './minfo.component.html',
  styleUrls: ['./minfo.component.css']
})
export class MinfoComponent implements OnInit {
   public id:any;
   public mvediodata:any;
   public mdetail:any;
   public year:any;
   public duration:any;
   public genres:any;
   public language:any;
   public mcast:any;
   public castid:any;
   public castdedata:any;
   public castname:any;
   public castpro:any;
   public castexdata:any;
   public mreview:any;
   public relength:any;
   public date:any;
   public mrecomdata:any;
   public mrecomformatted :any;
   public msidata:any;
   public msiformatted :any;
   Imdb = faImdb;
   Ins =faInstagram;
   Face = faFacebookSquare;
   Twitter=faTwitter;
   public alert:boolean=false;
   public alert2:boolean=false;
   public addbutton:boolean=true;
   public removebutton:boolean=false;
   public mobile:boolean;
  
  constructor(private mvedioService: MvedioService,private route:ActivatedRoute,private mdetailService:MdetailService,private mcastService:McastService,private modalService: NgbModal,private castdetail:CastdetailService,
    private castex:CastexService,private mreviewService:MreviewService,private cDate:DatePipe,
    private mrecomService:MrecomService, private msimilarService:MsimilarService,private router:Router,private config: NgbCarouselConfig) {this.router.routeReuseStrategy.shouldReuseRoute = () => false;}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchmvData();
    this.fetchmdData();
    this.fetchmcData();
    this.fetchmreData();
    this.fetchmrecomData();
    this.fetchmsiData();
    this.updatebutton();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      this.config.showNavigationIndicators = false;
    }
  }

  

 

  fetchmvData(){
    this.mvedioService.getAllMvedio(this.id).subscribe(res =>{
      this.mvediodata = res;
      console.log(this.mvediodata);
    });
  }

  fetchmdData(){
    this.mdetailService.getAllMdetail(this.id).subscribe(res =>{
      this.mdetail = res;
      var timeArr = res[0].release_date.split("-");
      this.year = timeArr[0];
      this.duration = Math.floor(res[0].runtime/60) + "hrs " +(res[0].runtime%60) +"mins";
      this.genres = res[0].genres;
      this.language = res[0].spoken_languages;
      this.upcontinue(res[0]);
      this.upmylist(res[0]);
    });
  }

  fetchmcData(){
    this.mcastService.getAllMcast(this.id).subscribe(res =>{
      this.mcast = res;
    });
  }

  fetchmreData(){
    this.mreviewService.getAllMreview(this.id).subscribe(res =>{
      this.mreview = res;
      this.relength = this.mreview.length;
      for(var i = 0;i < this.relength;i++){
         this.mreview[i].created_at = this.cDate.transform(this.mreview[i].created_at,'medium');
      }
    });
  }
  
  fetchmrecomData(){
    this.mrecomService.getAllMrecom(this.id).subscribe(res =>{
    this.mrecomdata = res;
    this.mrecomformatted = [];
    var j = -1;
    for (var i = 0; i < this.mrecomdata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.mrecomformatted[j] = [];
          this.mrecomformatted[j].push(this.mrecomdata[i]);
      }
      else {
          this.mrecomformatted[j].push(this.mrecomdata[i]);
      }
    }
    });
  }

  fetchmsiData(){
    this.msimilarService.getAllMsimilar(this.id).subscribe(res =>{
    this.msidata = res;
    this.msiformatted = [];
    var j = -1;
    for (var i = 0; i < this.msidata.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.msiformatted[j] = [];
          this.msiformatted[j].push(this.msidata[i]);
      }
      else {
          this.msiformatted[j].push(this.msidata[i]);
      }
    }
    
    });
  }

  passdata(id){
    this.castid = id.id;
    this.fetchcdetail(this.castid);
    this.castname = id.name;
    this.castpro = id.profile_path;
    this.fetchcastex(this.castid);
  }

  open(content){
    this.modalService.open(content,{ size: 'lg' });
  }

  fetchcdetail(cid){
     this.castdetail.getAllCastde(cid).subscribe(res =>{
        this.castdedata = res;
     })
  }

  fetchcastex(cid){
    this.castex.getAllCastex(cid).subscribe(res =>{
      this.castexdata = res;
   })
  }

  updatebutton(){
    var da = JSON.parse(localStorage.getItem('watchlist'));
    if(da !== null){
      for(var i = 0; i<da.length;i++){
        if(da[i].id === this.id){
           this.addbutton = false;
           this.removebutton = true;
        }
      }
    }
  }
  
  storage(data){
    var d = {"id":this.id,"title":data.title,"poster_path":data.poster_path,"type":"movie"};
    var da = JSON.parse(localStorage.getItem('watchlist'));
    var cur =[];
    cur.push(d);
    if(da !== null){
      for(var i = 0; i<da.length;i++){
        cur.push(da[i])
      }
    }
    localStorage.setItem('watchlist',JSON.stringify(cur));
  }

  remove(){
    var da = JSON.parse(localStorage.getItem('watchlist'));
    var index = -1;
    for(var i = 0;i <da.length;i++){
       if(da[i].id == this.id){
          index = i;
       }
    }
    if(index !== -1){
      da.splice(index,1);
    }
    localStorage.removeItem('watchlist');
    localStorage.setItem('watchlist',JSON.stringify(da));
  }

  opalert(){
     this.alert = true;
     this.addbutton = false;
     this.removebutton = true;
     setTimeout(()=> this.alert = false,5000);
  }

  realert(){
    this.alert2 = true;
    this.addbutton = true;
    this.removebutton = false;
    setTimeout(()=> this.alert2 = false,5000);
  }

  upcontinue(data){
    var da = JSON.parse(localStorage.getItem('continue'));
    var d = {"id":this.id,"title":data.title,"poster_path":data.poster_path,"type":"movie"};
    var cur =[];
    cur.push(d);
    var index = -1;
    if(da === null){
       localStorage.setItem('continue',JSON.stringify(cur));
    }
    if(da !== null){
      for(var i = 0; i<da.length;i++){
        if(da[i].id == this.id){
          index = i;
       }
      }
      if(index !== -1){
        da.splice(index,1);
        var newA = cur.concat(da);
        localStorage.removeItem('continue');
        localStorage.setItem('continue',JSON.stringify(newA));
      }
      if(index === -1){
        var newB = cur.concat(da);
        localStorage.removeItem('continue');
        localStorage.setItem('continue',JSON.stringify(newB));
      }
    }
  }
  upmylist(data){
    var da = JSON.parse(localStorage.getItem('watchlist'));
    var d = {"id":this.id,"title":data.title,"poster_path":data.poster_path,"type":"movie"};
    var cur =[];
    cur.push(d);
    var index = -1;
   if(da !== null){
     for(var i = 0; i<da.length;i++){
       if(da[i].id == this.id){
         index = i;
      }
     }
     if(index !== -1){
       da.splice(index,1);
       var newA = cur.concat(da);
       localStorage.removeItem('watchlist');
       localStorage.setItem('watchlist',JSON.stringify(newA));
     }
   }
  }
}
