import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanificationPageComponent } from './pages/planification-page/planification-page.component';
import { RequirementsAnalysisPageComponent } from './pages/requirements-analysis-page/requirements-analysis-page.component';
import { UiuxPageComponent } from './pages/uiux-page/uiux-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RememberPassPageComponent } from './pages/remember-pass-page/remember-pass-page.component';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'requirements', component: RequirementsAnalysisPageComponent },
  { path: 'planification', component: PlanificationPageComponent },
  { path: 'uiux', component: UiuxPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'remember', component: RememberPassPageComponent },
  { path: 'user-home', component: UserHomePageComponent },
  {path: 'admin-home', component: AdminHomeComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
