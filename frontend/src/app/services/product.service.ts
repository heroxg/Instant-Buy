import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { productsUrl } from '../config/api'

import { Product } from '../models/product'



@Injectable()
export class ProductService {

  // products: Product[] = [
  //   new Product(1, 'product 1', 'This is product 1 description. The product is really cool', 100, "assets/images/product-1.jpg"),
  //   new Product(2, 'product 2', 'This is product 2 description. The product is really cool', 150, "assets/images/product-1.jpg"),
  //   new Product(3, 'product 3', 'This is product 3 description. The product is really cool', 180, "assets/images/product-1.jpg"),
  //   new Product(4, 'product 4', 'This is product 4 description. The product is really cool', 200, "assets/images/product-1.jpg"),
  //   new Product(5, 'product 5', 'This is product 5 description. The product is really cool', 100, "assets/images/product-1.jpg"),
  //   new Product(6, 'product 6', 'This is product 6 description. The product is really cool', 250, "assets/images/product-1.jpg"),
  //   new Product(7, 'product 7', 'This is product 7 description. The product is really cool', 400, "assets/images/product-1.jpg")
  // ]

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
  //Todo: populate product from an API and return an observables
    return this.http.get<Product[]>(productsUrl);
  }

}
