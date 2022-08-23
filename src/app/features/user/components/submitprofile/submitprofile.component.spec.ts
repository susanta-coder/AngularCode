import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitprofileComponent } from './submitprofile.component';

describe('SubmitprofileComponent', () => {
  let component: SubmitprofileComponent;
  let fixture: ComponentFixture<SubmitprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
