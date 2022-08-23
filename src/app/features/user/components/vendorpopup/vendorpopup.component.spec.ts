import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpopupComponent } from './vendorpopup.component';

describe('VendorpopupComponent', () => {
  let component: VendorpopupComponent;
  let fixture: ComponentFixture<VendorpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
