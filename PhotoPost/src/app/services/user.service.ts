import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserById(userId: number): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users/' + userId);
  }
}