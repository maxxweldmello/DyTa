import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete-dialog',
  templateUrl: './user-dialog-delete.component.html',
  styleUrls: ['./user-dialog-delete.component.css']
})
export class UserDialogDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: any }
  ) {}

  onDelete(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter((u: any) => u.id !== this.data.user.id);

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
