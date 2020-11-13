import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.sass']
})
export class SkilsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scroll(el) {
    el.scrollIntoView();
  }

}
