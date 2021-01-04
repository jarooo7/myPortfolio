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
      image: 'img-goodwire',
      title: 'Good Wire',
      content: 'System monitoringu jakości powietrza, wyposarzony w mobilne urzadzenia pomiarowe.',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon: ['angular', 'laravel', 'sass', 'c']
    },
    {
      image: 'img-rekoportal1',
      title: 'RekoPortal',
      content: 'Aplikacja webowa portalu społecznościowego dla rekonstruktorów historycznych.',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon: ['angular', 'firebase', 'sass']
    },
    {
      image: 'img-apkrekoportal1',
      title: 'RekoPortal na Androida',
      content: 'Aplikacja na urzadzenia z systemem Android portalu społeczniościowego RekoPortal',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon: ['ionic', 'firebase', 'cordova', 'nodejs']
    },
    {
      image: 'img-pearpair',
      title: 'Pear Pair',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon: ['angular', 'net-core', 'c-sharp']
    },
    {
      image: 'img-gogojump',
      title: 'GO! GO! JUMP!',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      src: '../../../assets/apps/GoGoJump.apk',
      git: '#',
      icon: ['unity', 'c-sharp']
    },
    {
      image: 'img-pokeinvaders',
      title: 'Poke Invaders',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon: ['c-sharp', 'xna']
    },
    {
      image: 'img-astar',
      title: 'Algorytm A Star',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },
    {
      image: 'img-AI1',
      title: 'Algorytm Apriori',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },
    {
      image: 'img-AI3',
      title: 'Algorytm k najbliższych sąsiadów',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },
    {
      image: 'img-AI2',
      title: 'Algorytm decyzyjny',
      content: 'przez twe oczy twe oczy zielone oszalałem gwiazdy chyba twym oczom oddały cały blask',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
