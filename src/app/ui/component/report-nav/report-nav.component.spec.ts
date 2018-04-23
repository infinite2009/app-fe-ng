import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNavComponent } from './report-nav.component';

describe('NavTopReportComponent', () => {
  let component: ReportNavComponent;
  let fixture: ComponentFixture<ReportNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
