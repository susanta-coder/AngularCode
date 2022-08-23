import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdpopupComponent } from './jdpopup.component';

describe('JdpopupComponent', () => {
  let component: JdpopupComponent;
  let fixture: ComponentFixture<JdpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JdpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
