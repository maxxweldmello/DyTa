import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private userService: AppService) {}

  users: any[] = [];
  sub!: Subscription;

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    const ls = localStorage.getItem('users');
    if (ls) {
      this.users = JSON.parse(ls);
    } else {
      this.sub = this.userService.getUser().subscribe({
        next: users => {
          console.log('Fetched Users:', users);
          this.users = users;
          localStorage.setItem('users', JSON.stringify(users));
        },
        error: err => console.error('Error fetching users:', err)
      });
    }
  }
  
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
