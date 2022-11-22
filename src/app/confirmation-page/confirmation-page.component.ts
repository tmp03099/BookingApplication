import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit {

  expired: String;

  profileForm: FormGroup;



  constructor() { }

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

  }

 

  



}
