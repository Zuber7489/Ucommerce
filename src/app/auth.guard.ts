import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // You may need to access localStorage or a service to check authentication status
  const isAuthenticated = !!localStorage.getItem('loggedInUserEmail'); // Example condition

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    const router = new Router();
    router.navigate(['login']);
    return false;
  }

  return true;
};
