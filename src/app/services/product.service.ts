import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /*products = [
    { id: 1, name: 'iPhone 15', price: 1200 },
    { id: 2, name: 'Computer', price: 4300 },
    { id: 3, name: 'iPad Pro', price: 1000 }
  ];

  getAllProducts() {
    return this.products;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }*/


  constructor(private http: HttpClient) {}

  getAllProducts(){
    return this.http.get("http://localhost:8083/products");
  }

  deleteProduct(product: Product){
    return this.http.delete("http://localhost:8083/products/" + product.id);
  }
}
