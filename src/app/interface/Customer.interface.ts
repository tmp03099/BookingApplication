import { States } from "../detail-information/state-data-store";
import { Countries } from "./Countries.interface";

export interface Customer{
    sDate: Date;
    eDate: Date;
    peopleNum: number;
    bed: number;
    kindRoom: String;
    firstname: String;
    lastname: String;
    phone:number;
    email:String;
    country: Countries;
    state: States;
    city: String;
    address: String;
    zipcode: number;
    cardName: String;
    cardNum: String;
    cardExpire: String;
    securityCode: String;

}