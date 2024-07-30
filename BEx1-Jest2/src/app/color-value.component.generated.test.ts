// @ts-nocheck
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { ColorValueComponent } from './color-value.component';

describe('ColorValueComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        ColorValueComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [

      ]
    }).overrideComponent(ColorValueComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(ColorValueComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.sendColor = jest.fn();
    component.ngOnInit();
    expect(component.sendColor).toHaveBeenCalled();
  });

  it('should run #ngOnChanges()', async () => {

    component.ngOnChanges();

  });

  it('should run #sendColor()', async () => {
    component.colorValueEvent = component.colorValueEvent || {};
    component.colorValueEvent.emit = jest.fn();
    component.sendColor({});
    expect(component.colorValueEvent.emit).toHaveBeenCalled();
  });

});