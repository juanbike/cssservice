import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowweDidItComponent } from './howwe-did-it.component';

describe('HowweDidItComponent', () => {
  let component: HowweDidItComponent;
  let fixture: ComponentFixture<HowweDidItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowweDidItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowweDidItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
