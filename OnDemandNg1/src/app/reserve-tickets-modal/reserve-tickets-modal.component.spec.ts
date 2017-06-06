import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTicketsModalComponent } from './reserve-tickets-modal.component';

describe('ReserveTicketsModalComponent', () => {
  let component: ReserveTicketsModalComponent;
  let fixture: ComponentFixture<ReserveTicketsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveTicketsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveTicketsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
