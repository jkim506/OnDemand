import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() event: Event;

  constructor(private router: Router) { 

  }

  goToEventDetails(){
     this.router.navigate(['/event/your-name']);
  }

  ngOnInit() {
  }

}
