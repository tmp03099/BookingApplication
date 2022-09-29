import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../Service/productService';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  // Create a method to retrieve the product from the service.
  // getProduct():void{
  //   this.products =this.productService.getProduct();
  // }

  async ngOnInit(): Promise<void> {

    this.products = await this.productService.getProducts();
    console.log("A");
    console.log(this.products);
  }

}
