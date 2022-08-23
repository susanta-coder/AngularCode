import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuserprofilecntComponent } from './vuserprofilecnt.component';

describe('VuserprofilecntComponent', () => {
  let component: VuserprofilecntComponent;
  let fixture: ComponentFixture<VuserprofilecntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuserprofilecntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuserprofilecntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
