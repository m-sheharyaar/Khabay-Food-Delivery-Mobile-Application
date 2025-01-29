import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertShopTimingPage } from './insert-shop-timing.page';

describe('InsertShopTimingPage', () => {
  let component: InsertShopTimingPage;
  let fixture: ComponentFixture<InsertShopTimingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertShopTimingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertShopTimingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
