import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShopModalPage } from './search-shop-modal.page';

describe('SearchShopModalPage', () => {
  let component: SearchShopModalPage;
  let fixture: ComponentFixture<SearchShopModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchShopModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchShopModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
