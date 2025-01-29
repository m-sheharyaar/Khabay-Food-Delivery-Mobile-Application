import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeleteSubscribedShopPage } from './all-delete-subscribed-shop.page';

describe('AllDeleteSubscribedShopPage', () => {
  let component: AllDeleteSubscribedShopPage;
  let fixture: ComponentFixture<AllDeleteSubscribedShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDeleteSubscribedShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeleteSubscribedShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
