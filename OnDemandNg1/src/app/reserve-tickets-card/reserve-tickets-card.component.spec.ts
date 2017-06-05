import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTicketsCardComponent } from './reserve-tickets-card.component';

describe('ReserveTicketsCardComponent', () => {
  let component: ReserveTicketsCardComponent;
  let fixture: ComponentFixture<ReserveTicketsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveTicketsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveTicketsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
