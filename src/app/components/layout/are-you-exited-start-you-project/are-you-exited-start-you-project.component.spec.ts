import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouExitedStartYouProjectComponent } from './are-you-exited-start-you-project.component';

describe('AreYouExitedStartYouProjectComponent', () => {
  let component: AreYouExitedStartYouProjectComponent;
  let fixture: ComponentFixture<AreYouExitedStartYouProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouExitedStartYouProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreYouExitedStartYouProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
