import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  
  credentials = {
    email: '',
    password: ''
  };

  submitted = false;
  isLoading = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  onLogin(loginForm: any): void {
    this.submitted = true;

    if (loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.userService.login(this.credentials.email, this.credentials.password).subscribe({
      next: (users) => {
        if (users && users.length > 0) {
          const user = users[0];
          alert(`أهلاً ${user.name}! تم تسجيل الدخول بنجاح 🎉`);
          
          // Refresh الصفحة عشان الـ Navbar يتحدث
          // أو navigate مع reload
          this.router.navigate(['/products']).then(() => {
            window.location.reload(); // هتحدث الـ Navbar
          });
        } else {
          this.errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة!';
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage = 'حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى!';
        this.isLoading = false;
      }
    });
  }

  resetForm(loginForm: any): void {
    this.submitted = false;
    loginForm.reset();
    this.errorMessage = '';
  }
}