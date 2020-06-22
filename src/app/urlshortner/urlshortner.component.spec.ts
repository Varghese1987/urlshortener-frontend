import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlshortnerComponent } from './urlshortner.component';

describe('UrlshortnerComponent', () => {
  let component: UrlshortnerComponent;
  let fixture: ComponentFixture<UrlshortnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlshortnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlshortnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
