import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-card-vertical',
  templateUrl: './event-card-vertical.component.html',
  styleUrls: ['./event-card-vertical.component.scss']
})
export class EventCardVerticalComponent implements OnInit {

  @Input() event: Event;
  private percentage: number;

  constructor(private router: Router) { 
  }

  goToEventDetails(){
     this.router.navigate(['/event/your-name']);
  }

  ngOnInit() {
    this.percentage = Math.round((this.event.attendees.length / this.event.capacity) * 100);
  }
}