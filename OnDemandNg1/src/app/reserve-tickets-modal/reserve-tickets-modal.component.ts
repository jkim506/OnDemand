import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard, OverlayConfig } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {Event} from '../models/event.model';
import { EventService } from "../event.service";
import { UsersService } from "app/users.service";

export class ReserveTicketsModalDataContext extends BSModalContext {
  constructor(public event: Event) {
    super();
  }
}

@Component({
  selector: 'app-reserve-tickets-modal',
  templateUrl: './reserve-tickets-modal.component.html',
  styleUrls: ['./reserve-tickets-modal.component.scss']
})
export class ReserveTicketsModalComponent implements  CloseGuard, ModalComponent<ReserveTicketsModalDataContext> {
  context: ReserveTicketsModalDataContext;

  constructor(
    public dialog: DialogRef<ReserveTicketsModalDataContext>,
    private eventService: EventService,
    private userService: UsersService) { 
    this.context = dialog.context;
  }

  beforeDismiss(): boolean | Promise<boolean> {
    return true;
  }
  beforeClose(): boolean | Promise<boolean> {
    return true;
  }

  close(){
    this.dialog.close();
  }

  reserveTickets(){
    this.eventService.addUserToYourNameEvent(this.userService.activeUser);
    this.dialog.close();
  }
}
