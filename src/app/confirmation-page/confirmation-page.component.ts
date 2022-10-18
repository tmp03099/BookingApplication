import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit {

  cardHolder: String;

  cardNumber: String;

  year: Date;

  month: Date;
  
  cvv: number;

  creditForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){

  }

  



}
