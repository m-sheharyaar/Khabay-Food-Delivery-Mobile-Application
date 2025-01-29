import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPhonePage } from './signup-phone.page';

describe('SignupPhonePage', () => {
  let component: SignupPhonePage;
  let fixture: ComponentFixture<SignupPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPhonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
