import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { DetailInformationComponent } from './detail-information/detail-information.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { MainComponent } from './main/main.component';
import { SearchingPageComponent } from './searching-page/searching-page.component';

const routes: Routes = [

  {path: 'home', component: MainComponent},
  {path: 'booking', component: BookingPageComponent,
    children:[
      {path:'', redirectTo:'searching', pathMatch:'full'},
      {path:'searching', component:SearchingPageComponent},
      {path:'detail', component:DetailInformationComponent}

    ]
  },
  
  {path: 'list', component: HotelListComponent},

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
