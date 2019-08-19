import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LCUploadPage } from './lcupload.page';

describe('LCUploadPage', () => {
  let component: LCUploadPage;
  let fixture: ComponentFixture<LCUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LCUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LCUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
