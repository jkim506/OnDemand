import { Film } from './film.model';
import { User } from './user.model';

export class Event {
    id: number;
    eventOrganiser: User;
    location: string;
    capacity: number;
    description?: string;
    approved: boolean;
    attendees: User[];
    film: Film;
    date: string;
    time: string;
}