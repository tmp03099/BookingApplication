import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { Countries } from '../interface/Countries.interface';
import { DataService } from '../Service/dataService';
import { countries } from './country-data-store';
import { States, states } from './state-data-store';

@Component({
  selector: 'app-detail-information',
  templateUrl: './detail-information.component.html',
  styleUrls: ['./detail-information.component.scss']
})
export class DetailInformationComponent implements OnInit {

  public id: String | null = null;

  detailInfo: any[] = [];

  storeValue: any = {};

  selectedTilte: String = "";

  titles: any[] = [];

  firstNameValue: String = "";

  country: Countries[] = countries;

  selectedCountry = countries;

  state: States[] = states;

  selectedState = states;

  constructor(

    private route: ActivatedRoute,
    private detailService: DataService

  ) { 

    this.titles = [
      {
        name:'MR'
      },
      {
        name:'MRS'
      },
      {
        name:'MS'
      }
    ]

  }

  ngOnInit(): void {

    //get queryParam value from searching component to get id 
    this.route.queryParamMap.subscribe(async (param) => {
      this.id = param.get('id');

      
      this.detailInfo = await this.detailService.getDetailProduct();

      //(value)=>{}: inline function
      //function (value){}
      //forEach call inline function pass value(each element in list) to inline function
      this.detailInfo.forEach((value)=>{
        if(this.id == value.id){
          this.storeValue = value;
          console.log(value);
        }
        
      });

    });


    console.log(this.id);
  }



 
  


}
