import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchOurVideoComponent } from './watch-our-video.component';

describe('WatchOurVideoComponent', () => {
  let component: WatchOurVideoComponent;
  let fixture: ComponentFixture<WatchOurVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchOurVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchOurVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
