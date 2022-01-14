import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './client-component/about/about.component';
import { ContactComponent } from './client-component/contact/contact.component';
import { EventsComponent } from './client-component/events/events.component';
import { HomeComponent } from './client-component/home/home.component';
import { MaintenanceComponent } from './client-component/maintenance/maintenance.component';
import { NewsComponent } from './client-component/news/news.component';
import { PagenotfoundComponent } from './client-component/pagenotfound/pagenotfound.component';
import { ProgramsComponent } from './client-component/programs/programs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'events', component: EventsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/maintenance', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
