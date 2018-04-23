import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxPlaygroundComponent } from './ajax-playground.component';

describe('AjaxPlaygroundComponent', () => {
  let component: AjaxPlaygroundComponent;
  let fixture: ComponentFixture<AjaxPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
