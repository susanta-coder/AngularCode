import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningCompleteComponent } from './screening-complete.component';

describe('ScreeningCompleteComponent', () => {
  let component: ScreeningCompleteComponent;
  let fixture: ComponentFixture<ScreeningCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
