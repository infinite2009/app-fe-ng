/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThCellComponent } from './th-cell.component';

describe('ThCellComponent', () => {
  let component: ThCellComponent;
  let fixture: ComponentFixture<ThCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
