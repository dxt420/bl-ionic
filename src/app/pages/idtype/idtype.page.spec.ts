import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDTypePage } from './idtype.page';

describe('IDTypePage', () => {
  let component: IDTypePage;
  let fixture: ComponentFixture<IDTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
