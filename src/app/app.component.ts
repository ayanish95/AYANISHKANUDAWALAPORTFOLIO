import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

/**
 *   Import Components
 */
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AYANISHKANUDAWALAPORTFOLIO';
}
