import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { PROFILE } from '../../shared/profile';

@Component({
    selector: 'app-contact',
    imports: [IconComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    protected readonly profile = PROFILE;
}
