import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsAndCustomerCComponent } from './pins-and-customer-c.component';

describe('PinsAndCustomerCComponent', () => {
  let component: PinsAndCustomerCComponent;
  let fixture: ComponentFixture<PinsAndCustomerCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinsAndCustomerCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsAndCustomerCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
