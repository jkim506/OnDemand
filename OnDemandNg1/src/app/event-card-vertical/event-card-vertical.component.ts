import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event.model';
import { Router } from "@angular/router";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-event-card-vertical',
  templateUrl: './event-card-vertical.component.html',
  styleUrls: ['./event-card-vertical.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({ 'transform': 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ 'transform': 'translateY(20%)', opacity: 0 }),
        animate(1000)
      ])
    ])
  ]
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
