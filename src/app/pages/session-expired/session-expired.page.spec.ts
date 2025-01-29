import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionExpiredPage } from './session-expired.page';

describe('SessionExpiredPage', () => {
  let component: SessionExpiredPage;
  let fixture: ComponentFixture<SessionExpiredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionExpiredPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionExpiredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
