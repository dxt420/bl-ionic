import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgessPage } from './progess.page';

describe('ProgessPage', () => {
  let component: ProgessPage;
  let fixture: ComponentFixture<ProgessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
