import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserRecordsComponent } from './display-user-records.component';

describe('DisplayUserRecordsComponent', () => {
  let component: DisplayUserRecordsComponent;
  let fixture: ComponentFixture<DisplayUserRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
