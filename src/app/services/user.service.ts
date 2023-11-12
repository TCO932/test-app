import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  name: {
    title: String,
    first: String,
    last: String
  },
  picture: {
    large: String,
    medium: String,
    thumbnail: String
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<User> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        const user = response.results[0];
        return {
          name: user.name,
          picture: user.picture,
        } as unknown as User;
      })
    );
  }
}
