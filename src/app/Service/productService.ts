import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductService{

    constructor(private http: HttpClient){}

    async getProducts(): Promise<any> {
        const result = await this.http.get<any>('http://localhost:8080/hotel/list').toPromise();
        return result;
    }

}