import { User } from './models/user.model';
import { Injectable } from '@angular/core';
import { USERS } from './users';

@Injectable()
export class UsersService {

  public users: User[] = USERS.map(user => { return { name: `${user.name.first} + {user.name.last}`, image: user.picture.thumbnail } });

  constructor() {
  }
}
