/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WineFormComponent } from './wine-form.component';

describe('WineFormComponent', () => {
  let component: WineFormComponent;
  let fixture: ComponentFixture<WineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
