import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertShopDiscountPage } from './insert-shop-discount.page';

describe('InsertShopDiscountPage', () => {
  let component: InsertShopDiscountPage;
  let fixture: ComponentFixture<InsertShopDiscountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertShopDiscountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertShopDiscountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
