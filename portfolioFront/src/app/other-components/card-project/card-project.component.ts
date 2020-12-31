import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.sass']
})
export class CardProjectComponent implements OnInit {
  @Input() card: CardModel;
  constructor() { }

  ngOnInit() {
  }

  openPage(url: string){
    window.open(url, '_blank');
  }
}
