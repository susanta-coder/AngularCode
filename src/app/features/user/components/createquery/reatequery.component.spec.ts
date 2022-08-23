import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatequeryComponent } from './createquery.component';

describe('CreatequeryComponent', () => {
  let component: CreatequeryComponent;
  let fixture: ComponentFixture<CreatequeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatequeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
