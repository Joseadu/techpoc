import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
  private translate = inject(TranslateService);

  constructor() {
    // Configuración troncal para toda la aplicación desde el segundo cero
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}
