import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertShopPromotionsPage } from './insert-shop-promotions.page';

describe('InsertShopPromotionsPage', () => {
  let component: InsertShopPromotionsPage;
  let fixture: ComponentFixture<InsertShopPromotionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertShopPromotionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertShopPromotionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
