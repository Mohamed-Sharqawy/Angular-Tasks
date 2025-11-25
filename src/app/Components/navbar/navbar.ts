import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <--- 1. Import this line

@Component({
  selector: 'app-navbar',
  imports: [RouterModule], // <--- 2. Add this line
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    isMenuOpen = false;

  toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
