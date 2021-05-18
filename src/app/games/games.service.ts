import { Injectable } from '@angular/core';
import { Game } from './game/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  game: Game[]=[

    {
      id: "mass-effect",
      name: "Mass Effect Legendary Edition",
      dev: "BioWare",
      price: "R$299,00",
      rating: 4.3,
      imagePath: "assets/img/games/mass-effect.png"
    },

    {
      id: "snow-runner",
      name: "SnowRunner",
      dev: "Saber Interactive",
      price: "R$109,90",
      rating: 8.4,
      imagePath: "assets/img/games/snow-runner.png"
    },

    {
      id: "residente-evil-village",
      name: "Resident Evil Village",
      dev: "CAPCOM.CO",
      price: "R$239,99",
      rating: 9.5,
      imagePath: "assets/img/games/resident-evil-village.jpg"
    },

    {
      id: "pubg-pc",
      name: "PLAYERUNKNOWN'S BATTLEGROUNDSr",
      dev: "KRAFTON, inc",
      price: "R$75,00",
      rating: 5.3,
      imagePath: "assets/img/games/pubg_pc.png"
    },

    {
      id: "jump-force",
      name: "Jump Force",
      dev: "Spike Chunsoft Co., Ltd",
      price: "R$199,00",
      rating: 9.7,
      imagePath: "assets/img/games/jump-force.png"
    },

    {
      id: "the-witcher-3",
      name: "The Witcher® 3: Wild Hunt",
      dev: "CD PROJEKT RED",
      price: "R$79,99",
      rating: 9.8,
      imagePath: "assets/img/games/the-witcher-3.png"
    },

    {
      id: "siege-survival-gloria-victis",
      name: "Siege Survival: Gloria Victis",
      dev: "Black Eye Games, FishTankStudio",
      price: "R$47,19",
      rating: 9.6,
      imagePath: "assets/img/games/siege-survival-gloria-victis.png"
    },

    {
      id: "day-gone",
      name: "Days Gone",
      dev: "Bend Studio",
      price: "R$199,90",
      rating: 9.2,
      imagePath: "assets/img/games/days-gone.png"
    },

    {
      id: "lost-ruins",
      name: "Lost Ruins",
      dev: "ALTARI GAMES",
      price: "R$37,99",
      rating: 8.4,
      imagePath: "assets/img/games/lost-ruins.jpg"
    },

    {
      id: "red-dead-redemption-2",
      name: "Red Dead Redemption 2",
      dev: "Rockstar Games",
      price: "R$239,00",
      rating: 9.3,
      imagePath: "assets/img/games/red-dead-redemption-2.jpg"
    }


  ]

  constructor() { }

  games(): Game[]{
    return this.game;
  }
}
