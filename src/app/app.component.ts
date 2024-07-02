import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,  } from '@angular/router';

/**
 *   Import Components
 */
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AYANISHKANUDAWALAPORTFOLIO';
}
