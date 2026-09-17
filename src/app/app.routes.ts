import { Routes } from '@angular/router';

/**
 *   Import Components
 */
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { SkillsComponent } from './page/skill/skills.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { AboutComponent } from './page/about/about.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { CertificationsComponent } from './page/certifications/certifications.component';

export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'certifications', component: CertificationsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' },
];
