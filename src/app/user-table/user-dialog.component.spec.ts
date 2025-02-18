import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDailogComponent } from './user-dailog.component';

describe('UserDailogComponent', () => {
  let component: UserDailogComponent;
  let fixture: ComponentFixture<UserDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDailogComponent]
    });
    fixture = TestBed.createComponent(UserDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
