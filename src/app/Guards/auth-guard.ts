import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Service/user.service';

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.isLoggedIn()){
    return true;
  }else{
    alert('Must Login First');
    router.navigate(['/login']);
    return false;
  }
};

export const adminGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.isLoggedIn() && userService.isAdmin()){
    return true;
  }else {
    alert('This Content is Only for Admins');
    router.navigate(['/home']);
    return false;
  }
}
