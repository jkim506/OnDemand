import { Injectable } from '@angular/core';

@Injectable()
export class FilmService {

  public films = [
    {
      title: 'Fast & Furious',
      year: 2005,
      id: 1,
      image: '/assets/films/ff.jpg'
    }
  ];

  constructor() { }

}
