import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-change',
  templateUrl: './lang-change.component.html',
  styleUrls: ['./lang-change.component.sass']
})
export class LangChangeComponent implements OnInit {
  toggle = false
  classLang = 'lang-hide'
  lang = 'pl'
  langs = ['en', 'pl']

  constructor(public translateService: TranslateService) {
    if (localStorage.getItem('language')) {
      switch (localStorage.getItem('language')) {
        case 'en': {
          this.lang = 'en'
          break;
        }
        case 'pl': {
          this.lang = 'pl'
          break;
        }
        default: {
          this.lang = 'pl'
        }
      }
    } else {
      this.lang = 'pl'
    }
  }

  ngOnInit() {
  }

  ToggleLang() {
    this.toggle = !this.toggle;
    this.classLang = this.toggle ? 'lang-show' : 'lang-hide';
  }

  ChangeLang(l: string) {
    this.lang = l;
    localStorage.setItem('language',l);
    switch (l) {
      case 'en': {
        this.translateService.setDefaultLang('en');
        break;
      }
      case 'pl': {
        this.translateService.setDefaultLang('pl');
        break;
      }
      default: {
        this.translateService.setDefaultLang('pl');
      }
    }
  }
}
