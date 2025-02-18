import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewNestedComponent } from './user-view-nested.component';

describe('UserViewNestedComponent', () => {
  let component: UserViewNestedComponent;
  let fixture: ComponentFixture<UserViewNestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserViewNestedComponent]
    });
    fixture = TestBed.createComponent(UserViewNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
