import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInformationPage } from './shop-information.page';

describe('ShopInformationPage', () => {
  let component: ShopInformationPage;
  let fixture: ComponentFixture<ShopInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
