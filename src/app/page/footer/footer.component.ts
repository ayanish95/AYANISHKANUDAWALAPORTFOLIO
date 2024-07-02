import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCardContent, IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,IonCardContent,IonIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

    gotoLink(url:string){
      window.open(url,"_blank");
    }
}
