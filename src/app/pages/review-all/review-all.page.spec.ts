import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAllPage } from './review-all.page';

describe('ReviewAllPage', () => {
  let component: ReviewAllPage;
  let fixture: ComponentFixture<ReviewAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAllPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
