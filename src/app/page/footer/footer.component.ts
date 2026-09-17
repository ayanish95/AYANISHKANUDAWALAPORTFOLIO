import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { PROFILE } from '../../shared/profile';

@Component({
    selector: 'app-footer',
    imports: [IconComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
    protected readonly profile = PROFILE;
    protected readonly year = new Date().getFullYear();
}
