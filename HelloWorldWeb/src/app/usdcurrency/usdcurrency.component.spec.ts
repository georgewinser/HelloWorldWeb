import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdcurrencyComponent } from './usdcurrency.component';

describe('UsdcurrencyComponent', () => {
  let component: UsdcurrencyComponent;
  let fixture: ComponentFixture<UsdcurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdcurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
