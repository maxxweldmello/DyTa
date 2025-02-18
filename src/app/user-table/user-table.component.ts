import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDialogComponent } from './user-dialog.component';
import { UserDialogDeleteComponent } from './user-dialog-delete.component';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, AfterViewInit, OnChanges {
  constructor(private dialog: MatDialog, private router: Router) {}

  @Input() users: any[] = [];
  @Input() displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource();
  filterValues: any = {};

  ngOnInit(): void {
    this.dataSource.data = this.users;
    this.displayedColumns.push('actions');

    this.dataSource.filterPredicate = (data: any, filter: string): boolean => {
      const filters = JSON.parse(filter);
      // console.log(filters)

      return Object.keys(filters).every((key) => {
        const filterValue = filters[key];
        const columnValue = data[key];

        if (typeof columnValue === 'number') {
          return columnValue.toString().includes(filterValue);
        }

        const lowerCaseFilterValue = filterValue.toLowerCase();
        if (typeof columnValue === 'string') {
          return columnValue.toLowerCase().includes(lowerCaseFilterValue);
        }

        return false;
      });
    };
  }

  filter(event: Event, column: string): void {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filterValues[column] = filterValue;
    this.dataSource.filter = JSON.stringify(this.filterValues);
    // console.log(filterValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users']) {
      this.dataSource.data = this.users;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getColumnData(user: any, column: string): any {
    if (user[column] == '') {
      return 'NOT FOUND';
    }
    return user[column];
  }

  onEdit(user: any) {
    // console.log('Edit:', user);

    const dialogRef = this.dialog.open(UserDialogComponent, {
      height: 'auto',
      width: '400px',
      data: { user, displayedColumns: this.displayedColumns },
    });

    dialogRef.afterClosed().subscribe((updatedData) => {
      if (updatedData) {
        // console.log('Updated User:', updatedData);

        // user = [...updatedData]
        Object.assign(user, updatedData);
      }
    });
  }

  onDelete(user: any): void {
    // console.log('Delete:, user);

    const dialogRef = this.dialog.open(UserDialogDeleteComponent, {
      width: '400px',
      data: { user },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.users = this.users.filter((u) => u.id !== user.id);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.dataSource.data = this.users;
      }
    });
  }

  onView(user: any): void {
    this.router.navigate(['/user/view', user.id]);
  }
}
