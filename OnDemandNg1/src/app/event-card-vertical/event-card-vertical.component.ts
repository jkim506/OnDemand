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
      state('*', style({ opacity: 0 })),
      state('in', style({ 'transform': 'translateY(0)', opacity: 1 })),
      transition('* => in', [
        style({ 'transform': 'translateY(20%)', opacity: 0 }),
        animate('700ms ease')
      ])
    ])
  ]
})
export class EventCardVerticalComponent implements OnInit {
  @Input() event: Event;
  @Input() isVisible: boolean = false;
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
