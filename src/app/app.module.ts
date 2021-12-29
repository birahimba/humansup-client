import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';
import { ProgramsComponent } from './client/programs/programs.component';
import { EventsComponent } from './client/events/events.component';
import { NewsComponent } from './client/news/news.component';
import { ContactComponent } from './client/contact/contact.component';
import { PagenotfoundComponent } from './client/pagenotfound/pagenotfound.component';
import { FooterComponent } from './client/footer/footer.component';
import { MaintenanceComponent } from './client/maintenance/maintenance.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule, provideAuth,getAuth } from "@angular/fire/auth";
import { AngularFirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';

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
    MaintenanceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps:[HttpClient]
      }
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
