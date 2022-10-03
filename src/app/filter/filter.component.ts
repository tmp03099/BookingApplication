import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FilterProduct } from '../interface/FilterProduct.interface';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  items: MenuItem[] =[];

  selectedRoom:String[] = [];

  selectedBedding:String[] = [];

  selectedStatus:String[] = [];

  //Create a newFilterEvent output name has EventEmitter type 
  //new EventEmitter<FilterProduct>() Tells Angular to create a new event emitter and the data it emits is of type FilterProduct object
  @Output() newFilterEvent = new EventEmitter<FilterProduct>();

  @Output() cancelFilterEvent = new EventEmitter<FilterProduct>();

 
  constructor() { }

  ngOnInit(): void {
    
  }


  handleCancelClicked(){
    
    //Defined filterSelected object types FilterProduct with values
    const filterCancel: FilterProduct = {
      roomType: this.selectedRoom,
      bedding: this.selectedBedding,
      status: this.selectedStatus
    };

    //Emit event with the new filterSelected value
    this.cancelFilterEvent.emit(filterCancel);   

  }


  handleApplyClicked(){

    //Defined filterSelected object types FilterProduct with values
    const filterSelected: FilterProduct = {

      roomType: this.selectedRoom,
      bedding: this.selectedBedding,
      status: this.selectedStatus

    };

    //Emit event with the new filterSelected value
    this.newFilterEvent.emit(filterSelected);    
  }
  



}


