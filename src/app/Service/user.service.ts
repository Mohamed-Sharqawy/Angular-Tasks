import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from '../Models/iuser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // استخدام URL مباشر للتجربة
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
    // طباعة الـ URL للتأكد
    console.log('UserService API URL:', this.apiUrl);
  }

  /**
   * إضافة يوزر جديد (التسجيل)
   */
  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user);
  }

  /**
   * تسجيل الدخول - بسيط جداً
   */
  login(email: string, password: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(
        tap(users => {
          if (users && users.length > 0) {
            // حفظ اليوزر في localStorage
            localStorage.setItem('currentUser', JSON.stringify(users[0]));
            localStorage.setItem('isLoggedIn', 'true');
          }
        })
      );
  }

  /**
   * تسجيل الخروج
   */
  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
  }

  /**
   * التحقق لو اليوزر logged in
   */
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  /**
   * الحصول على اليوزر الحالي
   */
  getCurrentUser(): IUser | null {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  }

  /**
   * التحقق لو اليوزر Admin
   */
  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  }
}