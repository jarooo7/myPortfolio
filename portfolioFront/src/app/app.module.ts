import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkilsComponent } from './skils/skils.component';
import { ContactComponent } from './contact/contact.component';
import { HexagonComponent } from './atoms-components/hexagon/hexagon.component';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';
import { ContactButtonComponent } from './atoms-components/contact-button/contact-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkilsComponent,
    ContactComponent,
    HexagonComponent,
    ContactButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleSmoothScrollModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
