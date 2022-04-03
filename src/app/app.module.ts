import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './client-component/navbar/navbar.component';
import { HomeComponent } from './client-component/home/home.component';
import { AboutComponent } from './client-component/about/about.component';
import { ProgramsComponent } from './client-component/programs/programs.component';
import { EventsComponent } from './client-component/events/events.component';
import { NewsComponent } from './client-component/news/news.component';
import { ContactComponent } from './client-component/contact/contact.component';
import { PagenotfoundComponent } from './client-component/pagenotfound/pagenotfound.component';
import { FooterComponent } from './client-component/footer/footer.component';
import { MaintenanceComponent } from './client-component/maintenance/maintenance.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CareersComponent } from './client-component/careers/careers.component';
import { LecturersComponent } from './client-component/community/lecturers/lecturers.component';
import { SpeakersComponent } from './client-component/community/speakers/speakers.component';
import { StudentsComponent } from './client-component/community/students/students.component';
import { PartnersComponent } from './client-component/community/partners/partners.component';
import { BlogComponent } from './client-component/community/blog/blog.component';

export function createTranslateLoader (httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProgramsComponent,
    EventsComponent,
    NewsComponent,
    ContactComponent,
    PagenotfoundComponent,
    FooterComponent,
    MaintenanceComponent,
    CareersComponent,
    LecturersComponent,
    SpeakersComponent,
    StudentsComponent,
    PartnersComponent,
    BlogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
