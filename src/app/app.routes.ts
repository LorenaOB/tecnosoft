import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RequirementsAnalysisComponent } from './Services/requirements-analysis/requirements-analysis.component';
import { PlanificationComponent } from './Services/planification/planification.component';
import { UiuxComponent } from './Services/uiux/uiux.component';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  {path: 'requirements', component: RequirementsAnalysisComponent},
  {path: 'planification', component: PlanificationComponent},
  {path: 'uiux', component: UiuxComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
