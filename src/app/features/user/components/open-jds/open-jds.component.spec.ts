import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenJdsComponent } from './open-jds.component';

describe('AllOpenJdsComponent', () => {
  let component: OpenJdsComponent;
  let fixture: ComponentFixture<OpenJdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenJdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenJdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
