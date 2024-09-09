import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private books = [
    {
      id: 'e48ba4f1-7d61-4a6c-bc4e-ce21692185e9',
      name: 'Twiztid - Generation Nightmare [Exclusive Vinyl Fan Pack]',
      price: 40.0,
      rating: 3.0,
      imageURL: 'https://m.media-amazon.com/images/I/81BWZWQXScL._SL1500_.jpg',
      isOutOfStock: false,
    },
    {
      id: '0b949733-4a21-4db8-8e7c-8356beab2c7b',
      name: 'Game of Thrones (TV Soundtrack) - For The Throne - Music Inspired by Game of Thrones',
      price: 43.0,
      rating: 4.1,
      imageURL: 'https://m.media-amazon.com/images/I/713Dj1SbSNL._SL1500_.jpg',
      isOutOfStock: false,
    },
    {
      id: 'd77dab12-3bb9-4b12-a1cd-37d7daeee61f',
      name: 'Alex Aiono - Tour Fanzine 1017',
      price: 19.9,
      rating: 2.3,
      imageURL: 'https://m.media-amazon.com/images/I/81xogn0Q4LL._SY342_.jpg',
      isOutOfStock: false,
    },
    {
      id: '70038e2e-253b-4dad-8b30-dd6a9729570a',
      name: 'The Offspring - Let The Bad Times (Exclusive Cobalt Blue Vinyl)',
      price: 65.0,
      rating: 4.8,
      imageURL: 'https://m.media-amazon.com/images/I/615N9pAwIXL._SY342_.jpg',
      isOutOfStock: false,
    },
    {
      id: 'dfceb939-b8e5-4ab1-a3b1-0535424f0c88',
      name: 'Dream Child - Until Death',
      price: 65.0,
      rating: 3.8,
      imageURL: 'https://m.media-amazon.com/images/I/91TTbh0DbYL._SY342_.jpg',
      isOutOfStock: true,
    },
    {
      id: 'c829567d-6feb-4ea0-9b3f-ba4d7eee1d65',
      name: 'You Me At Six - Vi (Exc Vnl) 1018',
      price: 60.0,
      rating: 4.1,
      imageURL: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY342_.jpg',
      isOutOfStock: false,
    },
    {
      id: 'c2a700c6-7f8d-4be8-8dcc-81868f7054d1',
      name: 'Various Artists - The Goldbergs Mixtape Vol. 1 ',
      price: 60.0,
      rating: 3.5,
      imageURL: 'https://m.media-amazon.com/images/I/71Ar5ajAyzL._SY342_.jpg',
      isOutOfStock: false,
    },
    {
      id: 'de53632c-e606-4a78-9ea6-abe80dcad508',
      name: 'Jeff Russo - Legion FX Show Soundtrack',
      price: 15.0,
      rating: 2.0,
      imageURL: 'https://m.media-amazon.com/images/I/81jdH3TUDJL._SY342_.jpg',
      isOutOfStock: false,
    },
  ];

  constructor() {
    const books = localStorage.getItem('books');

    if (books) {
      this.books = JSON.parse(books);
    }
  }

  getBooks() {
    return this.books;
  }
}
