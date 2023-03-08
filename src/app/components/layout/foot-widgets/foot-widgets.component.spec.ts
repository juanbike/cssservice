import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootWidgetsComponent } from './foot-widgets.component';

describe('FootWidgetsComponent', () => {
  let component: FootWidgetsComponent;
  let fixture: ComponentFixture<FootWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootWidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
