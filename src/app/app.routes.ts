import { Routes } from '@angular/router';

/**
 *   Import Components
 */
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { SkillsComponent } from './page/skill/skills.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

export const routes: Routes = [{ path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'Skills', component: SkillsComponent },
      { path: 'portfolio', component: PortfolioComponent }];
