import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';
  constructor( private translateService: TranslateService) {
    
    if (localStorage.getItem('language')) {
      switch (localStorage.getItem('language')) {
        case 'en': {
          translateService.setDefaultLang('en');
          break;
        }
        case 'pl': {
          translateService.setDefaultLang('pl');
          break;
        }
        default: {
          translateService.setDefaultLang('pl');
        }
      }
    } else {
      translateService.setDefaultLang('pl');
    }
  }

  
}
