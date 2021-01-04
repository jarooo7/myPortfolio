import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.sass']
})
export class HexagonComponent implements OnInit {

  @Input() name: string;
  @Input() positonRight: number;
  @Input() positonTop: number;


  constructor() { }


  ngOnInit() {
  }



}
