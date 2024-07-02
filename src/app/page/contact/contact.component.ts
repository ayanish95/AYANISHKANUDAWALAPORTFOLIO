import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,IonCardContent,IonIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
