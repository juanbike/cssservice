import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienttestimonialsComponent } from './clienttestimonials.component';

describe('ClienttestimonialsComponent', () => {
  let component: ClienttestimonialsComponent;
  let fixture: ComponentFixture<ClienttestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienttestimonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienttestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
