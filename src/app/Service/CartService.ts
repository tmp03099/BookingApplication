import { HotelDetail } from '../interface/HotelDetail.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: HotelDetail[] = [];

  addToCart(product: HotelDetail){
    this.items.push(product);
  }
  


  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }


}