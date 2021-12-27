import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: { valid: any; value: { email: string; password: string; }; }) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(
        'info@humansup.org',
        'humanressourceMP'
      );
    }
  }

}
