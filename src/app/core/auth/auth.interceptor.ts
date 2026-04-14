import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Token Bearer inventado si el usuario está logueado
  let clonedRequest = req;
  const user = authService.currentUser();

  if (user) {
    clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer mock-token-for-${user.id}`,
      },
    });
  }

  // Petición y capturamos posibles errores globales
  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Si el token caduca o no es válido cerramos la sesión y vamos a login
        authService.logout();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    }),
  );
};
