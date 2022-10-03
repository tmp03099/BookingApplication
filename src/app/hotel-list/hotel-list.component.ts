import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
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
  
  constructor(private productService: ProductService) { }

  async ngOnInit(): Promise<void> {

    this.products = await this.productService.getProducts();
    
    console.log(this.products);
  }

  //applyFilter() from filter component list component
  applyFilter(newItem: FilterProduct){
    console.log(newItem);

  }

}
