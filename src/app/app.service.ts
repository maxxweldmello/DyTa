import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private usersUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}
  
  getUser(): Observable<any[]> {
    return this.http.get<{ users: any[] }>(this.usersUrl).pipe(
      map(response => response.users)
    );
  }
}