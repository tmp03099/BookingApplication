import { Injectable } from '@angular/core';
import { Customer } from '../interface/Customer.interface';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor() { }

  private customerInfo: Customer;

  public getCustomer(): Customer {
    return this.customerInfo;
  }

  public saveCustomer(inputData: Customer){
    this.customerInfo = inputData;
  }
  

 

}