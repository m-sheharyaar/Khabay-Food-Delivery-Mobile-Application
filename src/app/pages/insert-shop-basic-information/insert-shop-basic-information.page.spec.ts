import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertShopBasicInformationPage } from './insert-shop-basic-information.page';

describe('InsertShopBasicInformationPage', () => {
  let component: InsertShopBasicInformationPage;
  let fixture: ComponentFixture<InsertShopBasicInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertShopBasicInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertShopBasicInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
