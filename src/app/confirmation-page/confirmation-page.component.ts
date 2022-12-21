import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { CustomerService } from '../Service/CustomerService';
import { Customer } from '../interface/Customer.interface';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit {

  expired: String;

  profileForm: FormGroup;

  msgs: Message[];

  paymentInfo: Customer;

  constructor(
    private customerService: CustomerService
  ){ }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      cardHolder: new FormControl('', [
        Validators.required
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(12)
      ]),
      expiredDate: new FormControl('', [
        Validators.required
      ]),
      cvvOfCard: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4)
      ])

    });

    

  }

  //get info from profileForm
  get cardHolderControl() { 
    return this.profileForm.get('cardHolder');
  }

  get cardNumberControl(){
    return this.profileForm.get('cardNumber');
  }

  get dateControl(){
    return this.profileForm.get('yearOfCard');
  }

  get cvvControl(){
    return this.profileForm.get('cvvOfCard');
  }

  

  onSubmit(){

    //get customer information from customer service to update payment information
    this.customerService.getCustomer();

    
    console.log(this.customerService.getCustomer());


     

    //set up message for submit button
    this.msgs = [
      {severity:'success', summary:'Success', detail:'YOUR INFORMATION SUCCESSFULLY SUBMITTED'}
    ]
  
    this.profileForm.reset();



  }



}


