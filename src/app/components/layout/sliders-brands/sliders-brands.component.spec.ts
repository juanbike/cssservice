import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersBrandsComponent } from './sliders-brands.component';

describe('SlidersBrandsComponent', () => {
  let component: SlidersBrandsComponent;
  let fixture: ComponentFixture<SlidersBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidersBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
