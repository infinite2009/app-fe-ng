import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideItemComponent } from './side-nav-item.component';

describe('NavSideItemComponent', () => {
  let component: NavSideItemComponent;
  let fixture: ComponentFixture<NavSideItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSideItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
