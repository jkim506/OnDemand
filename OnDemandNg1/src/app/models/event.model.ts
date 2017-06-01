import { Film } from './film.model';
import { User } from './user.model';

export class Event {
    eventOrganiser: User;
    location: string;
    capacity: number;
    sold: number;
    description: string;
    approved: boolean;
    attendees: User[];
    film: Film;
    date: Date;
}