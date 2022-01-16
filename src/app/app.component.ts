import { Component } from '@angular/core';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humansup-client';

  constructor(private languageService : LanguageService){

  }

  onActivate(event: any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });  
 }
 
}
