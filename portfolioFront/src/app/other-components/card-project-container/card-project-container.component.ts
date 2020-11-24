import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-project-container',
  templateUrl: './card-project-container.component.html',
  styleUrls: ['./card-project-container.component.sass']
})
export class CardProjectContainerComponent implements OnInit {

  projList = [
    {
      img: 'img-proj1',
      title: 'Projekt 1',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask'
    },
    {
      img: 'img-proj1',
      title: 'Projekt 2',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask'
    },
    {
      img: 'img-proj1',
      title: 'Projekt 3',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask'
    },
    {
      img: 'img-proj1',
      title: 'Projekt 4',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask'
    },
    {
      img: 'img-proj1',
      title: 'Projekt 5',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
