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
import { MsgService } from './_services/msg-service.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CardProjectComponent } from './other-components/card-project/card-project.component';
import { CardProjectContainerComponent } from './other-components/card-project-container/card-project-container.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LangChangeComponent } from './other-components/lang-change/lang-change.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    ContactButtonComponent,
    CardProjectComponent,
    CardProjectContainerComponent,
    LangChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleSmoothScrollModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
