import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,IonCardContent,IonIcon],
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
