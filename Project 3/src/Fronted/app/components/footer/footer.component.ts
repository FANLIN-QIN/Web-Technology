import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public mobile:boolean;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width === 414) { // 768px portrait
      this.mobile = true;
      
    }
  }


}
