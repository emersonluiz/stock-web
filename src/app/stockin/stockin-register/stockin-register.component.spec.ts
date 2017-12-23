import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinRegisterComponent } from './stockin-register.component';

describe('StockinRegisterComponent', () => {
  let component: StockinRegisterComponent;
  let fixture: ComponentFixture<StockinRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
