import { Routes } from '@angular/router';

/**
 *   Import Components
 */
import { HomeComponent } from './page/home/home.component';
import { WorkComponent } from './page/work/work.component';
import { SkillsComponent } from './page/skill/skills.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'work', component: WorkComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'contact', component: ContactComponent },

      // Legacy routes kept as redirects so old bookmarks/search results don't 404
      { path: 'about', redirectTo: 'skills' },
      { path: 'experience', redirectTo: 'work' },
      { path: 'portfolio', redirectTo: 'work' },
      { path: 'certifications', redirectTo: 'skills' },

      { path: '**', redirectTo: '' },
];
