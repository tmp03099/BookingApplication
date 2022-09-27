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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BookingPageComponent,
    SideIntroComponent
  ],
  imports: [
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
