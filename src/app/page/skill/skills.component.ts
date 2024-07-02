import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule,IonCardContent,IonIcon],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
