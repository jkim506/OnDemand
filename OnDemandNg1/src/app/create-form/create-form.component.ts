
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { EventService } from '../event.service';
import { FilmService } from './../film.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  // request details summary share
  public activeFormSection = 1;

  public films: string[] = ['Your Name'];
  public newEvent;
  public selected: string;
  public showFilmCard = false;

  public pretendSaving = false;

  public displayDate;

  public ticketTypes = [
    {
      type: 'Adult',
      cinPrice: '$17.50',
      customPrice: '$17.50',
      selected: true
    },
    {
      type: 'Child',
      cinPrice: '$12.00',
      customPrice: '$12.00',
      selected: true
    },
    {
      type: 'Senior',
      cinPrice: '$12.00',
      customPrice: '$12.00',
      selected: false
    },
    {
      type: 'Student',
      cinPrice: '$14.00',
      customPrice: '$14.00',
      selected: false
    },
    {
      type: 'Loyalty',
      cinPrice: '$14.00',
      customPrice: '$14.00',
      selected: false
    }
  ];

  constructor(private userService: UsersService, private eventService: EventService, private filmService: FilmService) { }

  ngOnInit() {
    const today = new Date();
    this.displayDate = `${today.getDate()}/${today.getMonth() + 1}`;

    this.newEvent = {
      id: 2,
      eventOrganiser: this.userService.activeUser,
      location: 'Berkeley Cinemas, Takapuna',
      capacity: 320,
      approved: false,
      attendees: [],
      date: 'Sunday, 19th April',
      time: '9:00 pm',
      film: null,
      format: '2D',
      screenType: 'Regular'
    }

    this.filmService.getFilmsFromMovieExchange().subscribe((data) => {
      data.map( (film) => this.films.push(film.title));
    } );
  }

  public setFormSection(section) {
    document.scrollingElement.scrollTop = 0;
    this.activeFormSection = section;
  }

  public setProp(property, value) {
    this.newEvent[property] = value;
  }

  public onDescriptionBlur(event) {
    this.newEvent.description = event.target.value;
  }

  public filmSelected() {
    this.showFilmCard = true;
  }
  public createEvent() {
    this.eventService.addEvent(this.newEvent);
    this.pretendSaving = true;
    setTimeout(() => {
      this.pretendSaving = false;
      this.setFormSection(4);
    }, 600)

  }

}
