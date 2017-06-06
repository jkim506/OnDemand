import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {Event} from '../models/event.model';

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

  constructor(public dialog: DialogRef<ReserveTicketsModalDataContext>) { 
    this.context = dialog.context;
  }

  beforeDismiss(): boolean | Promise<boolean> {
    return true;
  }
  beforeClose(): boolean | Promise<boolean> {
    return true;
  }

  close(){
    console.log("Hi");
    this.dialog.close();
  }

}
