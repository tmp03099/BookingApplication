import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FilterProduct } from '../interface/FilterProduct.interface';
import { Product } from '../interface/product.interface';
import { ProductService } from '../Service/productService';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  products: Product[] = [];

  @ViewChild("op") 
  overlayPanel?: OverlayPanel;

  constructor(private productService: ProductService) { }

  async ngOnInit(): Promise<void> {

    this.products = await this.productService.getProducts();
    
    console.log(this.products);
  }

  //applyFilter() from filter component to list component
  async applyFilter(newItem: FilterProduct){

    //get new list every time of filter
    this.products = await this.productService.getProducts();

    console.log(newItem);

    //defined and assigned roomFilter equals products list    
    var roomFilter = this.products;

    //check roomtype array, if not empty will be filter
    if(newItem.roomType.length != 0){

       //apply filter for products list
      roomFilter = this.products.filter((objProduct)=> {
      
      /* check if the indexOf return has value inside objProduct.name 
      that will return value, opposite it will not return anything*/
      return (newItem.roomType.indexOf(objProduct.name) > -1);  
      });
    }

    //defined and assigned bedFilter
    var bedFilter = roomFilter;

    //check bedding array, if not empty will be filter
    if(newItem.bedding.length != 0){
      
      bedFilter = roomFilter.filter((obj) =>{

        return (newItem.bedding.indexOf(obj.kindBed) > -1);
  
      });
      
    }

    //defined and assigned products list
    this.products = bedFilter;

    //check status array, if not empty will be filter
    if(newItem.status.length !=0){

        
      this.products = bedFilter.filter((objProduct) => {

      return (newItem.status.indexOf(objProduct.status) > -1);
      });

      console.log(this.products);

    }

    //hide overplay panel
    this.overlayPanel?.hide();

  };


  async cancelFilter(filterItems: FilterProduct){
    
    //hide overplay panel
    this.overlayPanel?.hide();

  }




 



}
