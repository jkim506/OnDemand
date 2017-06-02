import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public activeUser;

  constructor(private usersService: UsersService) {
    this.activeUser = this.usersService.activeUser;
  }
}
