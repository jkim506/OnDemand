import { FilmService } from './film.service';
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Event } from './models/event.model';

@Injectable()
export class EventService {

  public events: Event[] = [
    {
      id: 1,
      eventOrganiser: this.userService.getTheArab(),
      location: 'ABC Cinema screen 1',
      capacity: 100,
      approved: true,
      attendees: this.userService.getUsers(),
      date: 'Saturday, 17th April',
      time: '7:00 pm',
      film: this.filmService.getSpiritedAway()
    },
    {
      id: 2,
      eventOrganiser: this.userService.getFirstUser(),
      location: 'ABC Cinema Screen 2',
      capacity: 10,
      approved: false,
      attendees: [this.userService.getFirstUser()],
      date: 'Sunday, 19th April',
      time: '9:00 pm',
      film: this.filmService.getFilms()[2]      
    }
  ]

  constructor(private userService: UsersService, private filmService: FilmService) { }

  public getEvents(): Event[] {
    return this.events;
  }

  public addEvent(newEvent: Event) {
    if (newEvent.id === 0) {
      // messy way to get the next id in the array;
      newEvent.id = this.events.reduce( (prev, curr) => {
        return (prev.id > curr.id) ? prev : curr;
      }).id + 1;
    }
    this.events.push(newEvent);
  } 

  public addUserToEvent(user: User, eventId: number) {
    const event = this.events.find(e => e.id == eventId);
    event.attendees.push(user); 
  } 
}
