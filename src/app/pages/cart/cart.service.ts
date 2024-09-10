import { Injectable } from '@angular/core';
import { ItemService } from '../home/item/item.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private itemService: ItemService) { }
}
