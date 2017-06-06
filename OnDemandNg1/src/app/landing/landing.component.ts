import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver
} from '@angular/core';
import { EventService } from '../event.service';
import {EventCardVerticalComponent} from '../event-card-vertical/event-card-vertical.component';

@Component({
  selector: 'app-landing',
  entryComponents: [EventCardVerticalComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  @ViewChild('verticalEventCardsContainer', { read: ViewContainerRef })
  private verticalEventCardsContainer: ViewContainerRef;
  private verticalEventCards: ComponentRef<EventCardVerticalComponent>[] = [];
  private events = this.eventService.getEvents();

  constructor(private eventService: EventService, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    let monsterEvents = this.eventService.getMonsterEvents();
    let $this = this;
    monsterEvents.forEach(function(event) {
      $this.addVerticalEventCard(event);
    });
  }

  private addVerticalEventCard(event) {
    let factory = this.resolver.resolveComponentFactory(EventCardVerticalComponent);
    let newCard = this.verticalEventCardsContainer.createComponent(factory);
    (<EventCardVerticalComponent>newCard.instance).event = event;
    this.verticalEventCards.push(newCard);
  }

  private showCards() {
    let i = 0;
    let interval = setInterval(() => {
      if (i > this.verticalEventCards.length - 1) {
        clearInterval(interval);
      }
      else {
        this.verticalEventCards[i].instance.isVisible = true;
        i++;
      }
    }, 200);
  }

  ngAfterViewInit() {
    this.showCards();
  }

}
