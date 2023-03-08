import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToseeMoreOurWorksComponent } from './want-tosee-more-our-works.component';

describe('WantToseeMoreOurWorksComponent', () => {
  let component: WantToseeMoreOurWorksComponent;
  let fixture: ComponentFixture<WantToseeMoreOurWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToseeMoreOurWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantToseeMoreOurWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
