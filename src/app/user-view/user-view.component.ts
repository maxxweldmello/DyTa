import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  userId: string | null = null;
  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    this.user = users.find((u: any) => u.id.toString() === this.userId);
  }
}
