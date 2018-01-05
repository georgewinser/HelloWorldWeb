import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EurocurrencyComponent } from './eurocurrency.component';

describe('EurocurrencyComponent', () => {
  let component: EurocurrencyComponent;
  let fixture: ComponentFixture<EurocurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EurocurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EurocurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
