import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-project-container',
  templateUrl: './card-project-container.component.html',
  styleUrls: ['./card-project-container.component.sass']
})
export class CardProjectContainerComponent implements OnInit {

  projList: CardModel[] = [
    {
      image: 'img-rekoportal1',
      title: 'RekoPortal',
      content: 'Aplikacja webowa portalu społecznościowego dla rekonstruktorów historycznych.',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon:['angular','firebase','sass']
    },
    {
      image: 'img-apkrekoportal1',
      title: 'RekoPortal na Androida',
      content: 'Aplikacja na urzadzenia z systemem Android portalu społeczniościowego RekoPortal',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon:['ionic', 'firebase', 'cordova','nodejs']
    },
    {
      image: 'img-proj1',
      title: 'Projekt 3',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon:['c-sharp', 'xna']
    },
    {
      image: 'img-proj1',
      title: 'Projekt 4',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon:[]
    },
    {
      image: 'img-proj1',
      title: 'Projekt 5',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon:[]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
