
import { Component } from '@angular/core';
import { IonCardContent, IonIcon } from '@ionic/angular/standalone';


@Component({
    selector: 'app-footer',
    imports: [IonCardContent, IonIcon],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {

    gotoLink(url:string){
      window.open(url,"_blank");
    }
}
