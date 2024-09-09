import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ItemComponent } from "./item/item.component";
import { ItemService } from './item/item.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule, RouterLink, ItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cartCount = signal<number>(2);
  
  private itemService = inject(ItemService);
  books = this.itemService.getBooks();

}
