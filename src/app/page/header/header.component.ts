import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterLink, IonIcon],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  status = false;
  addToggle()
  {
    this.status = !this.status;       
  }
}
