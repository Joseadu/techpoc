import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/auth/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './login.html',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);
  private translate = inject(TranslateService);

  readonly username = signal('');
  readonly password = signal('');
  readonly isLoading = signal(false);
  readonly hasError = signal(false);

  // identificar el idioma actual visualmente
  get activeLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'es';
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.isLoading.set(true);
    this.hasError.set(false);

    this.authService.login(this.username(), this.password()).subscribe({
      next: (success) => {
        this.isLoading.set(false);
        if (success) {
          this.router.navigate(['/']);
        } else {
          this.hasError.set(true);
        }
      },
      error: () => {
        this.isLoading.set(false);
        this.hasError.set(true);
      },
    });
  }
}
