import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbpcurrencyComponent } from './gbpcurrency.component';

describe('GbpcurrencyComponent', () => {
  let component: GbpcurrencyComponent;
  let fixture: ComponentFixture<GbpcurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbpcurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbpcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
