import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStatusUpdateModalPage } from './about-status-update-modal.page';

describe('AboutStatusUpdateModalPage', () => {
  let component: AboutStatusUpdateModalPage;
  let fixture: ComponentFixture<AboutStatusUpdateModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStatusUpdateModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStatusUpdateModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
