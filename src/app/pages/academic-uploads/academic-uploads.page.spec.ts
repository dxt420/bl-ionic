import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicUploadsPage } from './academic-uploads.page';

describe('AcademicUploadsPage', () => {
  let component: AcademicUploadsPage;
  let fixture: ComponentFixture<AcademicUploadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicUploadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicUploadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
