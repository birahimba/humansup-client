import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './client-component/about/about.component';
import { MissionComponent } from './client-component/about/mission/mission.component';
import { VisionComponent } from './client-component/about/vision/vision.component';
import { CareersComponent } from './client-component/careers/careers.component';
import { BlogComponent } from './client-component/community/blog/blog.component';
import { LecturersComponent } from './client-component/community/lecturers/lecturers.component';
import { PartnersComponent } from './client-component/community/partners/partners.component';
import { SpeakersComponent } from './client-component/community/speakers/speakers.component';
import { StudentsComponent } from './client-component/community/students/students.component';
import { ContactComponent } from './client-component/contact/contact.component';
import { DonationComponent } from './client-component/donation/donation.component';
import { EventsComponent } from './client-component/events/events.component';
import { HomeComponent } from './client-component/home/home.component';
import { MaintenanceComponent } from './client-component/maintenance/maintenance.component';
import { PagenotfoundComponent } from './client-component/pagenotfound/pagenotfound.component';
import { ProgramsComponent } from './client-component/programs/programs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'events', component: EventsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'community/blog', component: BlogComponent},
  { path: 'donation', component: DonationComponent},
  { path: 'community/lecturers', component: LecturersComponent},
  { path: 'community/partners', component: PartnersComponent},
  { path: 'community/speakers', component: SpeakersComponent},
  { path: 'community/students', component: StudentsComponent},
  { path: 'about/vision', component: VisionComponent},
  { path: 'about/mission', component:MissionComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
