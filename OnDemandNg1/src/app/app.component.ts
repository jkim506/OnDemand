import { Component, ViewContainerRef } from '@angular/core';
import { UsersService } from './users.service';
import { Overlay } from "angular2-modal/esm";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public activeUser;

  constructor(
    private usersService: UsersService,
    overlay: Overlay, 
    vcRef: ViewContainerRef,) {
    this.activeUser = this.usersService.activeUser;
    overlay.defaultViewContainer = vcRef;
  }
}
