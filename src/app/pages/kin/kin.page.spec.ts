import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinPage } from './kin.page';

describe('KinPage', () => {
  let component: KinPage;
  let fixture: ComponentFixture<KinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
