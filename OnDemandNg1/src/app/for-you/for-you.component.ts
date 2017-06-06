import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent implements OnInit {

  public goodEvents: Event[];
  public starwarsEvents: Event[];
  public disneyEvents: Event[];

  public events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.goodEvents = this.eventService.getMonsterEvents();
    this.starwarsEvents = this.eventService.getStarWarsEvents();
  }

}
