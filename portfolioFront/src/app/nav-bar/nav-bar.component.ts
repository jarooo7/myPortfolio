import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  menu=['home','about','projects', 'skils','contact']
  classBar = '';
  classBase = '';
  classScrolle = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 300){
      this.classScrolle = 'page-scroll';
    }
    else{
      this.classScrolle = '';
    }
    this.classBar = this.classBase + ' ' + this.classScrolle;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.classBase = this.classBase === '' ? 'responsive' : '';
    this.classBar = this.classBase + ' ' + this.classScrolle;
  }

}
