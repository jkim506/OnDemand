import { FilmService } from './../film.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';

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

  constructor(private userService: UsersService, private filmService: FilmService) { }

  ngOnInit() {
    this.newEvent = {
      id: 2,
      eventOrganiser: this.userService.activeUser,
      location: 'Berkeley Cinemas, Takapuna',
      capacity: 254,
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

}
