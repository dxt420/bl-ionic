import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportUploadPage } from './passport-upload.page';

describe('PassportUploadPage', () => {
  let component: PassportUploadPage;
  let fixture: ComponentFixture<PassportUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
