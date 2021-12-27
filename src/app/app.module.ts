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
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AdminClientModule } from './admin-client/admin-client.module';
import { AuthService } from './shared/services/auth.service';
import { FormsModule } from '@angular/forms';



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
    AdminClientModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
