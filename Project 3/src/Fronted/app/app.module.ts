import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CurrentlyMComponent } from './components/currently-m/currently-m.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopmComponent } from './components/popm/popm.component';
import { TprmComponent } from './components/tprm/tprm.component';
import { TrendmComponent } from './components/trendm/trendm.component';
import { PoptvComponent } from './components/poptv/poptv.component';
import { TprtvComponent } from './components/tprtv/tprtv.component';
import { TrendtvComponent } from './components/trendtv/trendtv.component';
import { FooterComponent } from './components/footer/footer.component';
import { MinfoComponent } from './components/minfo/minfo.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { ContinuewatchComponent } from './components/continuewatch/continuewatch.component';
import { TvinfoComponent } from './components/tvinfo/tvinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrentlyMComponent,
    PopmComponent,
    TprmComponent,
    TrendmComponent,
    PoptvComponent,
    TprtvComponent,
    TrendtvComponent,
    FooterComponent,
    MinfoComponent,
    HomepageComponent,
    MylistComponent,
    ContinuewatchComponent,
    TvinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
