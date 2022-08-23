import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChngscrpopupComponent } from './chngscrpopup.component';

describe('ChngscrpopupComponent', () => {
  let component: ChngscrpopupComponent;
  let fixture: ComponentFixture<ChngscrpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChngscrpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChngscrpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
