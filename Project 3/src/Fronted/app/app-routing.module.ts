import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinfoComponent } from './components/minfo/minfo.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { TvinfoComponent } from './components/tvinfo/tvinfo.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'mylist', component:MylistComponent},
  {path:'watch/movie', 
   children:[
     {path:':id',component:MinfoComponent}
   ]
  },
  {path:'watch/tv', 
   children:[
     {path:':id',component:TvinfoComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
