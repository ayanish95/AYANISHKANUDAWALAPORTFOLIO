import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,  } from '@angular/router';
import { addIcons } from 'ionicons';
import { call, logoGithub, logoLinkedin, mail, menuOutline } from 'ionicons/icons';

/**
 *   Import Components
 */
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AYANISHKANUDAWALAPORTFOLIO';

  constructor() {
    addIcons({ call, logoGithub, logoLinkedin, mail, menuOutline });
  }
}
