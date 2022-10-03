import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { FilterComponent } from './filter/filter.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path: 'home', component: MainComponent},
  {path: 'booking', component: BookingPageComponent},
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
