import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanificationPageComponent } from './pages/planification-page/planification-page.component';
import { RequirementsAnalysisPageComponent } from './pages/requirements-analysis-page/requirements-analysis-page.component';
import { UiuxPageComponent } from './pages/uiux-page/uiux-page.component';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  {path: 'requirements', component: RequirementsAnalysisPageComponent},
  {path: 'planification', component: PlanificationPageComponent},
  {path: 'uiux', component: UiuxPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
