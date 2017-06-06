import { FilmService } from './film.service';
import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Event } from './models/event.model';

@Injectable()
export class EventService {

  public yourNameEvent = {
    id: 1,
    eventOrganiser: this.userService.getTheArab(),
    location: 'ABC Cinema screen 1',
    description: 'test description',
    capacity: 100,
    approved: true,
    attendees: new Array(99),
    date: 'Saturday, 17th April',
    time: '7:00 pm',
    film: this.filmService.getFilm(7)
  };

  public events: Event[] = [
    { // star wars
      id: 1,
      eventOrganiser: this.userService.getTheArab(),
      location: 'ABC Cinema screen 1',
      capacity: 100,
      approved: true,
      attendees: new Array(99),
      date: 'Saturday, 17th April',
      time: '7:00 pm',
      film: this.filmService.getFilm(2)
    },
    { // star wars
      id: 2,
      eventOrganiser: this.userService.getFirstUser(),
      location: 'ABC Cinema Screen 2',
      capacity: 10,
      approved: false,
      attendees: [this.userService.getFirstUser()],
      date: 'Sunday, 19th April',
      time: '9:00 pm',
      film: this.filmService.getFilm(3)
    },
    { // star wars
      id: 3,
      eventOrganiser: this.userService.getRandomUser(),
      location: 'Event Cinemas, Albany',
      capacity: 20,
      approved: true,
      attendees: this.userService.getUsers(),
      date: 'Sunday, 18th April',
      time: '8:00 pm',
      film: this.filmService.getFilm(4)
    },
    { // godzilla
      id: 4,
      eventOrganiser: this.userService.getRandomUser(),
      location: 'Event Cinemas, Albany',
      capacity: 320,
      approved: true,
      attendees: new Array(300),
      date: 'Saturday, 17th April',
      time: '8:00 pm',
      film: this.filmService.getFilm(16)
    },
    { // ghost in the shell
      id: 5,
      eventOrganiser: this.userService.getRandomUser(),
      location: 'Berkeley Cinemas, Albany',
      capacity: 254,
      approved: true,
      attendees: new Array(100),
      date: 'Sunday, 18th April',
      time: '5:15 pm',
      film: this.filmService.getFilm(19)
    },
    { // king kong
      id: 6,
      eventOrganiser: this.userService.getRandomUser(),
      location: 'Berkeley Cinemas, Albany',
      capacity: 400,
      approved: true,
      attendees: new Array(358),
      date: 'Tuesday, 20th April',
      time: '7:00 pm',
      film: this.filmService.getFilm(20)
    },
    {
      id: 7,
      eventOrganiser: this.userService.getRandomUser(),
      location: 'Berkeley Cinemas, Albany',
      capacity: 300,
      approved: true,
      attendees: new Array(156),
      date: 'Tuesday, 20th April',
      time: '9:00 pm',
      film: this.filmService.getFilm(21)
    },
    {
      id: 8,
      eventOrganiser: this.userService.getRandomUser(),
      location: 'Event Cinemas, Albany',
      capacity: 220,
      approved: true,
      attendees: new Array(35),
      date: 'Sunday, 25th April',
      time: '3:00 pm',
      film: this.filmService.getFilm(9)
    },
    { // akira
      id: 9,
      eventOrganiser: this.userService.getRandomUser(),
      location: 'Event Cinemas, Albany',
      capacity: 220,
      approved: true,
      attendees: new Array(75),
      date: 'Sunday, 25th April',
      time: '6:00 pm',
      film: this.filmService.getFilm(17)
    }
  ]

  constructor(private userService: UsersService, private filmService: FilmService) { }

  public getEvents(): Event[] {
    return this.events;
  }

  public getEvent(id: number): Event {
    return this.events.find(e => e.id === id) as Event;
  }

  public addEvent(newEvent) {
    if (newEvent.id === 0) {
      // messy way to get the next id in the array;
      newEvent.id = this.events.reduce( (prev, curr) => {
        return (prev.id > curr.id) ? prev : curr;
      }).id + 1;
    }
    this.yourNameEvent = newEvent;
    this.events.unshift(newEvent);
  }

  public addUserToEvent(user: User, eventId: number) {
    const event = this.events.find(e => e.id == eventId);
    event.attendees.push(user);
  }

  public getYourNameEvent() {
    return this.yourNameEvent;
  }

  public getMonsterEvents() {
    const monsterEvents = [];
    monsterEvents.push(this.events.find(f => f.id === 4));
    monsterEvents.push(this.events.find(f => f.id === 5));
    monsterEvents.push(this.events.find(f => f.id === 6));
    monsterEvents.push(this.events.find(f => f.id === 7));
    return monsterEvents;
  }
  public getStarWarsEvents() {
    const monsterEvents = [];
    monsterEvents.push(this.events.find(f => f.id === 1));
    monsterEvents.push(this.events.find(f => f.id === 2));
    monsterEvents.push(this.events.find(f => f.id === 3));
    return monsterEvents;
  }

  public getAnimeEvents() {
    const monsterEvents = [];
    console.log(this.events.find(f => f.id === 19));
    monsterEvents.push(this.events.find(f => f.id === 19));
    console.log(monsterEvents);
    return monsterEvents;
  }

  public getDisneyEvents() {
    // TODO
    return [];
  }
}
