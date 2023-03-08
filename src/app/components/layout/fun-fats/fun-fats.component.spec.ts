import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFatsComponent } from './fun-fats.component';

describe('FunFatsComponent', () => {
  let component: FunFatsComponent;
  let fixture: ComponentFixture<FunFatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunFatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
