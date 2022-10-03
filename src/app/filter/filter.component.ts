import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { FilterProduct } from '../interface/filterProduct';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  items: MenuItem[] =[];

  selectedValues:String[] = [];

  checkedId = [];
  
  products: FilterProduct [] = [

    {   
      id:"A101",
      label:'SINGLE ROOM',
      isChecked:false
    },
    {
      id:"A102",
      label:'DELUXE ROOM',
      isChecked:false
    },
    {
      id:"A103",
      label:'FAMILY ROOM',
      isChecked:false
    }
    
  ]



  constructor() { }

  ngOnInit(): void {

    
  }



}


