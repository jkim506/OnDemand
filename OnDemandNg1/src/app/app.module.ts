import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule, TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DetailComponent } from './detail/detail.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventService } from './event.service';
import { UsersService } from './users.service';
import { FilmService } from './film.service';
import { EventCardComponent } from './event-card/event-card.component';
import { HttpModule } from '@angular/http';
import { EventCardVerticalComponent } from './event-card-vertical/event-card-vertical.component';
import { ReserveTicketsCardComponent } from './reserve-tickets-card/reserve-tickets-card.component';
import { ForYouComponent } from './for-you/for-you.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ReserveTicketsModalComponent } from './reserve-tickets-modal/reserve-tickets-modal.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'event/your-name',
    component: DetailComponent
  },
  {
    path: 'event/new',
    component: CreateFormComponent
  },
    {
    path: 'foryou',
    component: ForYouComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DetailComponent,
    CreateFormComponent,
    EventCardComponent,
    EventCardVerticalComponent,
    ReserveTicketsCardComponent,
    ReserveTicketsModalComponent,
    ForYouComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [ EventService, FilmService, UsersService ],
  bootstrap: [AppComponent],
  entryComponents: [ ReserveTicketsModalComponent ]
})
export class AppModule { }
