import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {Router} from '@angular/router'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if(isAuthenticated){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
  
};
