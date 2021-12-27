import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminClientModule { }
