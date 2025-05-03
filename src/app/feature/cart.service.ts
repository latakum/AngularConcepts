import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl:string ='https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }

  

}
