import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangescreenerComponent } from './changescreener.component';

describe('ChangescreenerComponent', () => {
  let component: ChangescreenerComponent;
  let fixture: ComponentFixture<ChangescreenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangescreenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangescreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
