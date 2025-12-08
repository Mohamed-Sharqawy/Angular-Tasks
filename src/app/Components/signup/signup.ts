import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../Models/iuser';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  
  // الـ Model بتاع الفورم
  user: IUser = {
    name: '',
    email: '',
    password: '',
    role: 'user' // default user عادي
  };

  // Confirm Password منفصل (مش في الـ Model)
  confirmPassword: string = '';

  submitted = false;
  isLoading = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  /**
   * التحقق لو الـ passwords متطابقة
   */
  passwordsMatch(): boolean {
    return this.user.password === this.confirmPassword;
  }

  /**
   * التسجيل
   */
  onSubmit(signupForm: any): void {
    this.submitted = true;

    // لو الفورم مش Valid
    if (signupForm.invalid) {
      return;
    }

    // لو الـ passwords مش متطابقة
    if (!this.passwordsMatch()) {
      this.errorMessage = 'كلمات المرور غير متطابقة!';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // إضافة اليوزر
    console.log('Attempting to register user:', this.user);
    
    this.userService.addUser(this.user).subscribe({
      next: (newUser) => {
        console.log('User registered successfully!', newUser);
        alert(`تم التسجيل بنجاح! أهلاً ${newUser.name} 🎉`);
        
        // الانتقال لصفحة Products
        this.router.navigate(['/products']);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error registering user:', err);
        console.error('Error details:', err.error);
        console.error('Status:', err.status);
        
        // رسالة خطأ أكثر تفصيلاً
        if (err.status === 0) {
          this.errorMessage = 'فشل الاتصال بالسيرفر! تأكد إن json-server شغال على port 3000';
        } else if (err.status === 404) {
          this.errorMessage = 'API endpoint مش موجود! تأكد من الـ URL';
        } else {
          this.errorMessage = `فشل التسجيل! Error: ${err.status} - ${err.message}`;
        }
        
        this.isLoading = false;
      }
    });
  }

  /**
   * Reset الفورم
   */
  resetForm(signupForm: any): void {
    this.submitted = false;
    signupForm.reset();
    this.user = {
      name: '',
      email: '',
      password: '',
      role: 'user'
    };
    this.confirmPassword = '';
    this.errorMessage = '';
  }
}