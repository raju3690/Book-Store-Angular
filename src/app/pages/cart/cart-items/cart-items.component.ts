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
  @Input({required: true}) book!: BookData & { quantity: number };

  private itemService = inject(ItemService);

  //quantity = this.itemService.quantity;

  onDeleteItem(bookId: string){
    this.itemService.deleteCartItem(bookId);
  }

  increaseQuantity() {
    this.itemService.updateQuantity(this.book.id, this.book.quantity + 1);
  }

  decreaseQuantity() {
    if (this.book.quantity > 1) {
      this.itemService.updateQuantity(this.book.id, this.book.quantity - 1);
    }
  }

}
