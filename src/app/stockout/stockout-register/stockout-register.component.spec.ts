import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockoutRegisterComponent } from './stockout-register.component';

describe('StockoutRegisterComponent', () => {
  let component: StockoutRegisterComponent;
  let fixture: ComponentFixture<StockoutRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockoutRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockoutRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
