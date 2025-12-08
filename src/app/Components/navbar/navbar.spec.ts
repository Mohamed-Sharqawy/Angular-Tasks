import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInit } from '@angular/core';
import { IUser } from '../../Models/iuser';
import { UserService } from '../../Service/user.service';
import { Route, Router } from '@angular/router';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit{
  isMenuOpen = false;
  isLoggedIn = false;
  currentUser : IUser | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.updateLoginStatus();
  }

  OnInit(): void {
      this.updateLoginStatus();
  }

  updateLoginStatus(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    this.currentUser = this.userService.getCurrentUser();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLogout(): void {
    if(confirm('Sure, You Wanna Logout!')){
      this.userService.logout();
      this.updateLoginStatus();
      this.isMenuOpen = false;
      alert('You have been successfully Logged out!');
      this.router.navigate(['/home'])
    }
  }
}
function Component(arg0: { selector: string; standalone: boolean; templateUrl: string; styleUrls: string[]; }): (target: typeof Navbar) => void | typeof Navbar {
  throw new Error('Function not implemented.');
}

