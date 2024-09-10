import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ItemComponent } from "./item/item.component";
import { ItemService } from './item/item.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule, RouterLink, ItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  private itemService = inject(ItemService);

  books = this.itemService.getBooks();
  cartCount = this.itemService.cartCount;

}
