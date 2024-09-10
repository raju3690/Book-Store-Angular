import { Component, inject, Input, signal } from '@angular/core';
import { BookData } from '../../home/item/item.model';
import { ItemService } from '../../home/item/item.service';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {
  @Input({required: true}) book!: BookData;

  quantity = signal(1);

  increaseQuantity(book: BookData) {
    this.quantity.update(q => q + 1);
  }

  decreaseQuantity(book: BookData) {
    if (this.quantity() > 1) {
      this.quantity.update(q => q - 1);
    }
  }

  

}
