import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
      .pipe(catchError(this.handleError<User>('getUsers id=${id}')));
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`http://localhost:3000/users`)
      .pipe(catchError(this.handleError('getUsers', [])));
  }

  updatetUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`http://localhost:3000/users/${user.id}`, user)
      .pipe(catchError(this.handleError<User>('update User')));
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`http://localhost:3000/users`, user)
      .pipe(catchError(this.handleError<User>('add User')));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
