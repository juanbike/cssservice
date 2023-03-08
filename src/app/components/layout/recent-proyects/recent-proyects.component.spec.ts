import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProyectsComponent } from './recent-proyects.component';

describe('RecentProyectsComponent', () => {
  let component: RecentProyectsComponent;
  let fixture: ComponentFixture<RecentProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentProyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
