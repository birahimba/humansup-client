import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminClientModule { }
