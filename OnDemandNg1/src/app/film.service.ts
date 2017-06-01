import { Injectable } from '@angular/core';

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
      title: 'The Little Mermaid',
      year: '1989',
      id: '13',
      image: '/assets/films/mermaid.jpg'
    },
    {
      title: 'Forrest Gump ',
      year: '1994',
      id: '14',
      image: '/assets/films/forrestGump.jpg'
    },
    {
      title: 'Your Name',
      year: '2016',
      id: '15',
      image: '/assets/films/yourname.jpg'
    }
  ];

  constructor() { }

}
