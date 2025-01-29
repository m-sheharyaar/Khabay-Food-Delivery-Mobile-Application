import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStatusPage } from './about-status.page';

describe('AboutStatusPage', () => {
  let component: AboutStatusPage;
  let fixture: ComponentFixture<AboutStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
