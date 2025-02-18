import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { user: any; displayedColumns: string[] }
  ) {}

  form: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.data.displayedColumns.forEach((column) => {
      if (column !== 'actions') {
        this.form.addControl(
          column,
          this.fb.control(this.data.user[column], Validators.required)
        );
      }
    });
  }

  onSubmit(): void {
    const updatedUser = this.form.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const updatedUsers = users.map((user: any) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    this.dialogRef.close(updatedUser);
  }
}
