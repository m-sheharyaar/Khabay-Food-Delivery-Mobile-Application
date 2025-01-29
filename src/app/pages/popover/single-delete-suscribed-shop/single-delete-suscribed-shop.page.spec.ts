import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDeleteSuscribedShopPage } from './single-delete-suscribed-shop.page';

describe('SingleDeleteSuscribedShopPage', () => {
  let component: SingleDeleteSuscribedShopPage;
  let fixture: ComponentFixture<SingleDeleteSuscribedShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDeleteSuscribedShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDeleteSuscribedShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
