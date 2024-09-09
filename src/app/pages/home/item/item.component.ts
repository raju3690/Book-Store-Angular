import { Component, inject, Input } from '@angular/core';
import { BookData } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input({required: true}) book!: BookData;
  

}
