import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShopListPage } from './user-shop-list.page';

describe('UserShopListPage', () => {
  let component: UserShopListPage;
  let fixture: ComponentFixture<UserShopListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShopListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShopListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
