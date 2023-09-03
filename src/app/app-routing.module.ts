import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'help', component: HelpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
