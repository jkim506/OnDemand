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

  public monsterEvents;
  public events;

  constructor(private eventService: EventService, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    let events = this.eventService.getEvents();
    let $this = this;
    events.forEach(function(event) {
      console.log(event);
      $this.addVerticalEventCard(event);
    });
  }

  private addVerticalEventCard(event) {
    let factory = this.resolver.resolveComponentFactory(EventCardVerticalComponent);
    let newCard = this.verticalEventCardsContainer.createComponent(factory);
    (<EventCardVerticalComponent>newCard.instance).event = event;
    this.verticalEventCards.push(newCard);
  }

  private showCard(cardIndex) {
    this.verticalEventCards[cardIndex].instance.isVisible = true;
  }

  ngAfterViewInit() {
    let i = 0;
    let interval = setInterval(() => {
      if (i > this.verticalEventCards.length ) {
        clearInterval(interval);
      }
      else {
        this.showCard(i);
        i++;
      }
    }, 200);
  }

}
