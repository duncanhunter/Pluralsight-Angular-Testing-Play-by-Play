import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';

import { UserEditFormComponent } from './user-edit-form.component';
declare var toMatchSnapshot: any;

describe('UserEditFormComponent', () => {
  let component: UserEditFormComponent;
  let fixture: ComponentFixture<UserEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render markup from snapshot`, () => {
    expect(fixture).toMatchSnapshot();
  });

  it(`should have valid form`, () => {
    const fakeUser = { id: 1, name: 'fake' };
    const changes = {user:{currentValue: fakeUser}} as any;
    component.ngOnChanges(changes);
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
