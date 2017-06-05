import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public monsterEvents;
  public events;

  constructor(private eventService: EventService) { }

  ngOnInit() {

    this.events = this.eventService.getEvents();

    this.monsterEvents = this.eventService.getMonsterEvents();
  }

}
