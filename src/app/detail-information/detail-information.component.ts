import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  country: Countries[] = countries;

  selectedCountry: Countries;

  state: States[] = states;

  selectedState: States;

  firstNameValue: String = "";
  lastnameValue: String = "";
  emailValue: String = "";
  confirmEmailValue: String = "";
  phoneValue: String = "";
  cityValue: String = "";
  addressValue: String = "";
  zipCodeValue: String = "";
  
  select = {};

  guest: number;

  tax: number = 0.07;

  total:number;

  constructor(

    private route: ActivatedRoute,
    private detailService: DataService

  ){ 

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

    //get queryParam value from searching component to get id and more
    this.route.queryParamMap.subscribe(async (param) => {

      //set id = field id in param
      this.id = param.get('id');

      //get information about new id from List
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


      //set date,guest,room value in param
      this.select['selectedStartDate'] = param.get('startDate');
      this.select['selectedEndDate'] = param.get('endDate');
      
      //convert string to number
      let numAdult = +(this.select['selectedAdult'] = param.get('adult'));
      let numChild = +(this.select['selectedChild'] = param.get('child'));
      this.guest = numAdult + numChild;

      this.select['selectedRoom'] = param.get('room');

      //calculate total price
      let num = +(this.storeValue.price);
      this.total= (num * this.tax) + num;
      
    });
  }



}
