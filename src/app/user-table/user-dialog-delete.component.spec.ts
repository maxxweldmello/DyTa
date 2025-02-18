import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogDeleteComponent } from './user-dialog-delete.component';

describe('UserDialogDeleteComponent', () => {
  let component: UserDialogDeleteComponent;
  let fixture: ComponentFixture<UserDialogDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDialogDeleteComponent]
    });
    fixture = TestBed.createComponent(UserDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
