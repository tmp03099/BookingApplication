import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../Service/PhotoService';

@Component({
  selector: 'app-side-intro',
  templateUrl: './side-intro.component.html',
  styleUrls: ['./side-intro.component.scss']
})
export class SideIntroComponent implements OnInit {

  images: any[] = [];

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {

    this.photoService.getImages().then((images: any[]) => this.images = images)
      
  }

  

}
