import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonPlaygroundComponent } from './radio-button-playground.component';

describe('RadioButtonPlaygroundComponent', () => {
  let component: RadioButtonPlaygroundComponent;
  let fixture: ComponentFixture<RadioButtonPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
