import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenerPendingComponent } from './screener-pending.component';

describe('ScreenerPendingComponent', () => {
  let component: ScreenerPendingComponent;
  let fixture: ComponentFixture<ScreenerPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenerPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenerPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
