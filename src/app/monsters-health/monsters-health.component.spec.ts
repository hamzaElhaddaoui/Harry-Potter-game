import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersHealthComponent } from './monsters-health.component';

describe('MonstersHealthComponent', () => {
  let component: MonstersHealthComponent;
  let fixture: ComponentFixture<MonstersHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstersHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
