import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,IonCardContent,IonIcon],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
