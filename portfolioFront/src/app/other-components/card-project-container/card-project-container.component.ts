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
      content: 'Aplikacja na system Android portalu społeczniościowego dla rekonstruktorów historycznych',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon: ['ionic', 'firebase', 'cordova', 'nodejs']
    },
    {
      image: 'img-pearpair',
      title: 'Pear Pair',
      content: 'Serwisu randkowego w Angular z API napisanym w ASP.NET Core',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon: ['angular', 'net-core', 'c-sharp']
    },
    {
      image: 'img-gogojump',
      title: 'GO! GO! JUMP!',
      content: 'Gra  zręcznościowa, mobilna na urządzenia z systemem Android',
      src: '../../../assets/apps/GoGoJump.apk',
      git: '#',
      icon: ['unity', 'c-sharp']
    },
    {
      image: 'img-pokeinvaders',
      title: 'Poke Invaders',
      content: 'Gra na system Windows oparta o klasyczną grę Space Invaders',
      link: 'http://rekoportal.j.pl/',
      git: '#',
      icon: ['c-sharp', 'xna']
    },
    {
      image: 'img-astar',
      title: 'Algorytm A Star',
      content: 'Implementacja algorytmu heurystycznego do znajdowania najkrótszej drogi',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },
    {
      image: 'img-AI1',
      title: 'Algorytm Apriori',
      content: 'Implementacja algorytmu eksploracji często używanych zestawów elementów i uczenia reguł asocjacyjnych',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },
    {
      image: 'img-AI3',
      title: 'Algorytm k najbliższych sąsiadów',
      content: 'Implementacja algorytmu używany do przewidywania wartości zmiennych losowych i klasyfikacji',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },
    {
      image: 'img-AI2',
      title: 'Algorytm decyzyjny',
      content: 'Implementacja algorytmu podejmujacego decyzje na podstawie przetwarzanych danych wejściowych',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
