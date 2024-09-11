import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ItemService } from '../home/item/item.service';
import { ItemComponent } from '../home/item/item.component';
import { CommonModule } from '@angular/common';
import { BookData } from '../home/item/item.model';
import { CartItemsComponent } from './cart-items/cart-items.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, ItemComponent, CommonModule, CartItemsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {

  private itemService = inject(ItemService);
  
  cartItems = this.itemService.getCartItems();
  cartCount = this.itemService.cartCount;
  totalAmount = this.itemService.cartTotal;

  onCheckout() {
    console.log(`Checking out submit`);
  }
}
