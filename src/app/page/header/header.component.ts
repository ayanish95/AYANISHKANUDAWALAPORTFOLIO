import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon.component';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterLink, IconComponent, LogoComponent],
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
