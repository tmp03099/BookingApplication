import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit {

  year: Date;

  month: Date;
  
  cvv: number;
  profileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      cardHolder: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    })

  }

  get cardHolder() { 
    return this.profileForm.get('cardholder');
  }

  get cardNumber(){
    return this.profileForm.get('cardnumber');
  }

  onSubmit(){

  }

 

  



}
