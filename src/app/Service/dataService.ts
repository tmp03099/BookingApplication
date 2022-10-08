import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DataService{

    constructor(private http: HttpClient){}

    //to load data from RESTAPI to web client
    async getProducts(): Promise<any> {
        const result = await this.http.get<any>('http://localhost:8080/hotel/list').toPromise();
        return result;
    }

}