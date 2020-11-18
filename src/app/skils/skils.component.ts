import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll/lib/ng2-simple-smooth-scroll.service';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.sass']
})
export class SkilsComponent implements OnInit {
  scal = 0.65;
  constructor() { }

  ngOnInit() {
  }

}
