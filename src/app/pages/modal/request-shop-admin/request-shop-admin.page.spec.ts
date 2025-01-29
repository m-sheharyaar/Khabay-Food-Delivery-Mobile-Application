import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestShopAdminPage } from './request-shop-admin.page';

describe('RequestShopAdminPage', () => {
  let component: RequestShopAdminPage;
  let fixture: ComponentFixture<RequestShopAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestShopAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestShopAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
