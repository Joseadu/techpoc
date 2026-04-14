import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // 1. Inyectamos el Token Bearer inventado si el usuario está logueado
  let clonedRequest = req;
  const user = authService.currentUser();

  if (user) {
    clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer mock-token-for-${user.id}`,
      },
    });
  }

  // 2. Ejecutamos la petición y capturamos posibles errores globales (como un 401: No autorizado)
  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // En caso de caducar o ser inválido el token simulado, lo matamos en cliente y a login
        authService.logout();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    }),
  );
};
