import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvUploadPage } from './cv-upload.page';

describe('CvUploadPage', () => {
  let component: CvUploadPage;
  let fixture: ComponentFixture<CvUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
