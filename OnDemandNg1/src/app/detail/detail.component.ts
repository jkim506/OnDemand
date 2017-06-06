import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private event;
  private events;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getYourNameEvent();
    this.events = this.eventService.getEvents();
  }
}
