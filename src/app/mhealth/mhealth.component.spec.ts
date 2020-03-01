import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhealthComponent } from './mhealth.component';

describe('MhealthComponent', () => {
  let component: MhealthComponent;
  let fixture: ComponentFixture<MhealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
