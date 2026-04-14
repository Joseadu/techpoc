import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  password?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  // Estado reactivo y atómico usando Signals
  public readonly currentUser = signal<User | null>(null);

  constructor() {
    this.checkInitialSession();
  }

  private checkInitialSession() {
    const savedUserId = localStorage.getItem('techpoc_user_id');
    if (savedUserId) {
      this.http.get<User[]>(`http://localhost:3000/users?id=${savedUserId}`).subscribe({
        next: (users) => {
          if (users && users.length) {
            const user = users[0];
            delete user.password;
            this.currentUser.set(user);
          } else {
            this.logout();
          }
        },
        error: () => this.logout(),
      });
    }
  }

  login(name: string, password: string): Observable<boolean> {
    return this.http
      .get<User[]>(`http://localhost:3000/users?name=${name}&password=${password}`)
      .pipe(
        map((users) => {
          if (users && users.length > 0) {
            const user = users[0];
            delete user.password;
            this.currentUser.set(user);
            localStorage.setItem('techpoc_user_id', user.id.toString());
            return true;
          }
          return false;
        }),
        catchError(() => of(false)),
      );
  }

  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('techpoc_user_id');
  }
}
