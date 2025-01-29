import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePopoverPage } from './favourite-popover.page';

describe('FavouritePopoverPage', () => {
  let component: FavouritePopoverPage;
  let fixture: ComponentFixture<FavouritePopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritePopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
