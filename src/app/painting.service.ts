import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import {user} from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  authSubjectFlag$ :BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(public http: HttpClient) { }

  getauth(){
    return this.authSubjectFlag$.asObservable();
  }

  setauth(status:boolean){
    this.authSubjectFlag$.next(status);
    localStorage.setItem('isAuthenticated',status.toString());
  }

  getProductDetails():Observable<user[]>{
    return this.http.get<user[]>(`${this.apiUrl}posts?_limit=3`)
  }

  validateUserDetail(username:string):Observable<any>{
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users`).pipe(
      map(users => {
        const user = users.find(user => user.username == username)
        if(user){
          return user;
        }
        else{
          throw new Error('inalid user');
        }
      }),
      catchError(error => {
        return of(null);
      })
    );
  }

}
