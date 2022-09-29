import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BookingPageComponent } from './booking-page/booking-page.component';   
import {MenubarModule} from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { SideIntroComponent } from './side-intro/side-intro.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import {TableModule} from 'primeng/table';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BookingPageComponent,
    SideIntroComponent,
    HotelListComponent
  ],
  imports: [
    InputNumberModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
