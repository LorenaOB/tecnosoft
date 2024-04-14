import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanificationPageComponent } from './pages/planification-page/planification-page.component';
import { RequirementsAnalysisPageComponent } from './pages/requirements-analysis-page/requirements-analysis-page.component';
import { UiuxPageComponent } from './pages/uiux-page/uiux-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path:'contact', component: ContactPageComponent },
  {path: 'requirements', component: RequirementsAnalysisPageComponent},
  {path: 'planification', component: PlanificationPageComponent},
  {path: 'uiux', component: UiuxPageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'sign-in', component: SignInComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
