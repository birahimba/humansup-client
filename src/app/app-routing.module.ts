import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './client/about/about.component';
import { ContactComponent } from './client/contact/contact.component';
import { EventsComponent } from './client/events/events.component';
import { HomeComponent } from './client/home/home.component';
import { NewsComponent } from './client/news/news.component';
import { PagenotfoundComponent } from './client/pagenotfound/pagenotfound.component';
import { ProgramsComponent } from './client/programs/programs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'events', component: EventsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
