import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event.model';
import { Router } from "@angular/router";
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ReserveTicketsModalComponent, ReserveTicketsModalDataContext } from '../reserve-tickets-modal/reserve-tickets-modal.component';

@Component({
  selector: 'app-reserve-tickets-card',
  templateUrl: './reserve-tickets-card.component.html',
  styleUrls: ['./reserve-tickets-card.component.scss']
})
export class ReserveTicketsCardComponent implements OnInit {

  @Input() event: Event;
  private percentage: number;

  constructor(public modal: Modal) { }

  ngOnInit() {
    this.percentage = Math.round((this.event.attendees.length / this.event.capacity) * 100);
  }

  openModal(){
    this.modal.open(ReserveTicketsModalComponent, new ReserveTicketsModalDataContext(this.event));
  }

}
