import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStatusSummaryComponent } from './profile-status-summary.component';

describe('ProfileStatusSummaryComponent', () => {
  let component: ProfileStatusSummaryComponent;
  let fixture: ComponentFixture<ProfileStatusSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileStatusSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStatusSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
