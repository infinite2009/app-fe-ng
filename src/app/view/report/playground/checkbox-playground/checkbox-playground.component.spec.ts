import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPlaygroundComponent } from './checkbox-playground.component';

describe('CheckboxPlaygroundComponent', () => {
  let component: CheckboxPlaygroundComponent;
  let fixture: ComponentFixture<CheckboxPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
