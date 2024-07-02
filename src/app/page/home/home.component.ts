import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonCardContent, IonIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  downloadpdf() {
    debugger
    const link = document.createElement('a');
    link.download = "AYANISH_KANUDAWALA_ANGULAR_DOTNET_3YRS.pdf";
    link.href = "assets/pdf/AYANISH_KANUDAWALA_ANGULAR_DOTNET_3YRS.pdf";    
    link.click();
  }

}
