import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from '@progress/kendo-angular-icons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';








@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AboutPageComponent,
    SettingsPageComponent,
    HelpPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    BrowserAnimationsModule,
    IconsModule,
    PopupModule,
    LayoutModule,
    DialogsModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
