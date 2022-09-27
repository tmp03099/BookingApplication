import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path: 'home', component: MainComponent},
  {path: 'booking', component: BookingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
