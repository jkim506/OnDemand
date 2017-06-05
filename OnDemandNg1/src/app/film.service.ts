import { Film } from './models/film.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//Easily the best data service in the world
@Injectable()
export class FilmService {

  public films = [
    {
      title: 'Star Wars: Episode IV',
      year: 1977,
      id: 2,
      image: '/assets/films/a_new_hope.jpg'
    },
    {
      title: 'Star Wars: Episode V',
      year: 1980,
      id: 3,
      image: '/assets/films/strikes_back.jpg'
    },
    {
      title: 'Star Wars: Episode VI',
      year: 1980,
      id: 4,
      image: '/assets/films/returnofthejedi.jpg'
    },
    {
      title: 'The Little Mermaid',
      year: 1989,
      id: 5,
      image: '/assets/films/mermaid.jpg'
    },
    {
      title: 'Forrest Gump',
      year: 1994,
      id: 6,
      image: '/assets/films/forrestGump.jpg'
    },
    {
      title: 'Your Name',
      year: 2016,
      id: 7,
      image: '/assets/films/yourname.jpg'
    },
    {
      title: 'Titanic',
      year: 1997,
      id: 8,
      image: '/assets/films/titanic.jpg'
    },
    {
      title: 'The Lion King',
      year: 1994,
      id: 9,
      image: '/assets/films/lion_king.jpg'
    },
    {
      title: 'Spirited Away',
      year: 2001,
      id: 10,
      image: '/assets/films/spirited_away.jpg'
    },
    {
      title: 'Home Alone',
      year: 1990,
      id: 11,
      image: '/assets/films/home_alone.jpg'
    },
    {
      title: 'Godzilla',
      year: '1954',
      id: 16,
      image: '/assets/films/godzilla.jpg'
    },
    {
      title: 'Akira',
      year: '1988',
      id: 17,
      image: '/assets/films/akira.jpg'
    },
    {
      title: 'Ghost in the Shell',
      year: '1995',
      id: 18,
      image: '/assets/films/ghostintheshell.jpg'
    }
  ];

  constructor(private http: Http) {

   }

  public getFilms(): Film[] {
    return this.films;
  }

  public getSpiritedAway(): Film {
    return this.films.find(f => f.id == 10) as Film;
  }

  public getYourName(): Film {
    return this.films.find(f => f.id == 7) as Film;
  }

  public getFilmsFromMovieExchange(): Observable<Film[]> {
    return this.http.get('http://localhost:61583/api/film')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json() as mxContract;
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}

export class mxContract {
  title: string;
}
