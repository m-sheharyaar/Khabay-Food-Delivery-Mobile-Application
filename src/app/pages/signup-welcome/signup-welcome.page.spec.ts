import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWelcomePage } from './signup-welcome.page';

describe('SignupWelcomePage', () => {
  let component: SignupWelcomePage;
  let fixture: ComponentFixture<SignupWelcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupWelcomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupWelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
