import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Goku', img: '' },
      { id: 2, name: 'Gohan', img: '' },
      { id: 3, name: 'Luffy', img: '' },
      { id: 4, name: 'Satoru', img: '' },
      { id: 5, name: 'Yuji', img: '' },
      { id: 6, name: 'Natsu', img: '' },
      { id: 7, name: 'Gon', img: '' },
      { id: 8, name: 'Spidy', img: '' },
    ];

    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
