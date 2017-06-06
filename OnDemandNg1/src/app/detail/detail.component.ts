import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getYourNameEvent();
    console.log(this.event);
  }

}
