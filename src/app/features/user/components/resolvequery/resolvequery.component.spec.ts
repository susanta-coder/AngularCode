import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvequeryComponent } from './resolvequery.component';

describe('ResolvequeryComponent', () => {
  let component: ResolvequeryComponent;
  let fixture: ComponentFixture<ResolvequeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvequeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
