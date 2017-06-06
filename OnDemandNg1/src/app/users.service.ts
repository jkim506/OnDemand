import { User } from './models/user.model';
import { Injectable } from '@angular/core';
import { USERS } from './users';

@Injectable()
export class UsersService {

  public users: User[] = USERS.map(user => { return { name: `${user.name.first} ${user.name.last}`, image: user.picture.thumbnail } });

  public activeUser = this.users[0];

  constructor() {
  }

  public getUsers(count?): User[] {
    if (count) {
      console.log(this.users.slice(0, count))
      return this.users.slice(0, count);
    }
    return this.users;
  }

  public getFirstUser(): User {
    return this.users[0];
  }

  public getTheArab(): User {
    return this.users[4];
  }

  public getRandomUser() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }
}
