import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdUploadPage } from './id-upload.page';

describe('IdUploadPage', () => {
  let component: IdUploadPage;
  let fixture: ComponentFixture<IdUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
