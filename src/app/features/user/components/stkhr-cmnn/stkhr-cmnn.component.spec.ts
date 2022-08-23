import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StkhrCmnnComponent } from './stkhr-cmnn.component';

describe('StakeholderCommunicationComponent', () => {
  let component: StkhrCmnnComponent;
  let fixture: ComponentFixture<StkhrCmnnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StkhrCmnnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StkhrCmnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
