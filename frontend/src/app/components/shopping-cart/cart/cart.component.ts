import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cart-item';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';

import { MessengerService } from '../../../services/messenger.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      // console.log(product)
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getcartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcuateCartTotal();
    })
  }

  calcuateCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }


}
