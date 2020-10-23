import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

import { MessengerService } from '../../../services/messenger.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 1, productid:1, productName: 'test1', qty: 4, price: 100},
    // {id: 2, productid:3, productName: 'test3', qty: 3, price: 1000},
    // {id: 3, productid:2, productName: 'test2', qty: 2, price: 600},
    // {id: 4, productid:4, productName: 'test4', qty: 1, price: 450}

  ]

  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product) => {
      // console.log(product)
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {
    let productExists = false

    for (let i in this.cartItems) {
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }
    if(!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    // if(this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price
    //   })
    // } else {
    //   for (let i in this.cartItems) {
    //     if(this.cartItems[i].productId === product.id) {
    //       this.cartItems[i].qty++
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty: 1,
    //         price: product.price
    //       })
    //     }
    // }


    // }

    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }


}
