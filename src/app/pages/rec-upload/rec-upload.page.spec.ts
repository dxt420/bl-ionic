import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecUploadPage } from './rec-upload.page';

describe('RecUploadPage', () => {
  let component: RecUploadPage;
  let fixture: ComponentFixture<RecUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
