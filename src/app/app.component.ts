import { Component } from '@angular/core';
import { LanguageService } from './services/language/language.service';
import * as Aos from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humansup-client';

  constructor(private languageService : LanguageService){

  }

  ngOnInit(){
    Aos.init({
      duration: 2000
    });
  }

  onActivate(event: any) {
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });  
 }
 
}
