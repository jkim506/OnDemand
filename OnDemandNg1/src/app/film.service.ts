import { Injectable } from '@angular/core';


//Easily the best data service in the world
@Injectable()
export class FilmService {

  public films = [
    {
      title: 'Fast & Furious',
      year: 2005,
      id: 1,
      image: '/assets/films/ff.jpg'
    },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: '1977',
      id: '10',
      image: '/assets/films/a_new_hope.jpg'
    },
      {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: '1980',
      id: '11',
      image: '/assets/films/strikes_back.jpg'
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: '1980',
      id: '12',
      image: '/assets/films/returnofthejedi.jpg'
    },
    {
      title: 'Titanic',
      year: '1997',
      id: '30',
      image: '/assets/films/titanic.jpg'
    },
    {
      title: 'The Lion King',
      year: '1994',
      id: '31',
      image: '/assets/films/lion_king.jpg'
    },
    {
      title: 'Spirited Away',
      year: '2001',
      id: '32',
      image: '/assets/films/spirited_away.jpg'
    },
    {
      title: 'Home Alone',
      year: '1990',
      id: '33',
      image: '/assets/films/home_alone.jpg'
    },
  ];

  constructor() { }

}
