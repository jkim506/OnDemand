import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardVerticalComponent } from './event-card-vertical.component';

describe('EventCardVerticalComponent', () => {
  let component: EventCardVerticalComponent;
  let fixture: ComponentFixture<EventCardVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCardVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
