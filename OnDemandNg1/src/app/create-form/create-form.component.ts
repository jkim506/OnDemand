import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  // request details summary share
  public activeFormSection = 2;

  public newEvent;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.newEvent = {
      id: 2,
      eventOrganiser: this.userService.activeUser,
      location: 'ABC Cinema Screen 2',
      capacity: 254,
      approved: false,
      attendees: [],
      date: 'Sunday, 19th April',
      time: '9:00 pm',
      film: null
    }
  }

  public setFormSection(section) {
    this.activeFormSection = section;
  }

  public setProp(property, value) {
    this.newEvent[property] = value;
  }

}
