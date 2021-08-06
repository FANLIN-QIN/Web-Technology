import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  public data:any;
  public formatted:any;
  public check:any=false;
  public check2:boolean=false;
  public mobile:boolean;
  constructor() { }

  ngOnInit(): void {
    this.getdata();
    console.log(this.data);
    this.checkfunction();
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
    }
  }  
   getdata(){
     this.data =JSON.parse(localStorage.getItem('watchlist'));
     this.formatted = [];
     var j = -1;
     if(this.data !== null){
       for (var i = 0; i < this.data.length; i++) {
       if (i % 6 == 0) {
           j++;
           this.formatted[j] = [];
           this.formatted[j].push(this.data[i]);
       }
       else {
           this.formatted[j].push(this.data[i]);
       }
     }
     }
     
   }

   checkfunction(){
     if(this.data == null){
      this.check = true;
     }
     if(this.data != null){
       if(this.data.length === 0 ){
         this.check = true;
     }
     if(this.data.length !== 0){
      this.check2 = true;
     }
     }
     
   }
}
