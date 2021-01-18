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
      title: 'proj.card.title.goodwire',
      content: 'proj.card.content.goodwire',
      link: 'goodwire.j.pl',
      gits: [{
        title:"proj.card.gw-link.backend",
        url: "https://github.com/jarooo7/GoodWire-backend"
      },
      {
        title:"proj.card.gw-link.frontend",
        url:"https://github.com/jarooo7/GoodWire"
      },{
        title:"proj.card.gw-link.hardware",
        url:"https://github.com/jarooo7/GoodWire-micro"
      }
      ],
      icon: ['angular', 'laravel', 'sass', 'c']
    },
    {
      image: 'img-rekoportal1',
      title: 'proj.card.title.rekoportal',
      content: 'proj.card.content.rekoportal',
      link: 'http://rekoportal.j.pl/',
      git: 'https://github.com/jarooo7/rekoportal',
      icon: ['angular', 'firebase', 'sass']
    },
    {
      image: 'img-apkrekoportal1',
      title: 'proj.card.title.rekoportal-m',
      content: 'proj.card.content.rekoportal-m',
      src: '#',
      git: '#',
      icon: ['ionic', 'firebase', 'cordova', 'nodejs']
    },
    {
      image: 'img-pearpair',
      title: 'proj.card.title.pearpair',
      content: 'proj.card.content.pearpair',
      link: 'http://pp.somee.com/',
      git: 'https://github.com/jarooo7/portalR',
      icon: ['angular', 'net-core', 'c-sharp']
    },
    {
      image: 'img-gogojump',
      title: 'proj.card.title.gojump',
      content: 'proj.card.content.gojump',
      src: '../../../assets/apps/GoGoJump.apk',
      git: 'https://github.com/jarooo7/gogojumper',
      icon: ['unity', 'c-sharp']
    },
    {
      image: 'img-pokeinvaders',
      title: 'proj.card.title.poke',
      content: 'proj.card.content.poke',
      git: '#',
      icon: ['c-sharp', 'xna']
    },
    {
      image: 'img-astar',
      title: 'proj.card.title.astar',
      content: 'proj.card.content.astar',
      git: 'https://github.com/jarooo7/Astar',
      icon: ['c']
    },
    {
      image: 'img-AI1',
      title: 'proj.card.title.ai1',
      content: 'proj.card.content.ai1',
      git: '#',
      icon: ['c']
    },
    {
      image: 'img-AI3',
      title: 'proj.card.title.ai3',
      content: 'proj.card.content.ai3',
      git: '#',
      icon: ['c']
    },
    {
      image: 'img-AI2',
      title: 'proj.card.title.ai2',
      content: 'proj.card.content.ai2',
      git: '#',
      icon: ['c']
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
