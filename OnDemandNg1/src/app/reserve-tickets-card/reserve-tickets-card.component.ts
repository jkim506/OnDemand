import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-reserve-tickets-card',
  templateUrl: './reserve-tickets-card.component.html',
  styleUrls: ['./reserve-tickets-card.component.scss']
})
export class ReserveTicketsCardComponent implements OnInit {

  @Input() event: Event;
  private percentage: number;

  constructor() { }

  ngOnInit() {
    this.percentage = Math.round((this.event.attendees.length / this.event.capacity) * 100);
  }

}
