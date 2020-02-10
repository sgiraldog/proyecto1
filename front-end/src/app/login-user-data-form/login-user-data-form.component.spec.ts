import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserDataFormComponent } from './login-user-data-form.component';

describe('LoginUserDataFormComponent', () => {
  let component: LoginUserDataFormComponent;
  let fixture: ComponentFixture<LoginUserDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
