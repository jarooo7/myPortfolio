import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.sass']
})
export class CardProjectComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() content: string;
  @Input() link: string;
  @Input() git: string;

  constructor() { }

  ngOnInit() {
  }

  openPage(url: string){
    window.open(url, '_blank');
  }
}
