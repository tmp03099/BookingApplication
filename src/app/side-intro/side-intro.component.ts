import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../Service/PhotoService';

@Component({
  selector: 'app-side-intro',
  templateUrl: './side-intro.component.html',
  styleUrls: ['./side-intro.component.scss']
})
export class SideIntroComponent implements OnInit {

  value1: number = 2;

  value2: number = 0;

  value3: number = 1;

  rangeDate: Date[] | undefined;

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
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.photoService.getImages().then((images: any[]) => this.images = images)
      
  }

  async handleSearchClicked(){
    await this.router.navigate(['booking']);
  }

}
