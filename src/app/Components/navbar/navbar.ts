import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { IUser } from '../../Models/iuser';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  isLoggedIn = false;
  currentUser: IUser | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // تحديث الحالة لما الصفحة تتحمل
    this.updateLoginStatus();
  }

  /**
   * تحديث حالة اللوجن
   */
  updateLoginStatus(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    this.currentUser = this.userService.getCurrentUser();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogout(): void {
    if (confirm('متأكد إنك عايز تسجل خروج؟')) {
      this.userService.logout();
      this.updateLoginStatus();
      this.isMenuOpen = false;
      alert('تم تسجيل الخروج بنجاح! 👋');
      this.router.navigate(['/home']);
    }
  }
}