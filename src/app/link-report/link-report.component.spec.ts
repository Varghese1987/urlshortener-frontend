import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkReportComponent } from './link-report.component';

describe('LinkReportComponent', () => {
  let component: LinkReportComponent;
  let fixture: ComponentFixture<LinkReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
