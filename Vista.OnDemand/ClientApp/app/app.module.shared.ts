import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ExploreComponent } from './components/explore/explore.component';
import { EventCreationComponent } from './components/event/event-creation.component';
import { EventDetailsComponent } from './components/event/event-details.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ExploreComponent,
        EventCreationComponent,
        EventDetailsComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'explore', component: ExploreComponent },
            { path: 'create-event', component: EventCreationComponent },
            { path: 'event/:id', component: EventDetailsComponent },
            { path: '**', redirectTo: '#' }
        ])
    ]
};
