import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  items: MenuItem[] =[];

  selectedValues:String[] = [];


  constructor() { }

  ngOnInit(): void {


  }



}
