import { Injectable } from '@angular/core';
import { ɵnoSideEffects } from '@angular/core/src/r3_symbols';
import { Game } from './game/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  static games(): Game[] {
    throw new Error('Method not implemented.');
  }

  gam: Game[]=[

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


  ]

  constructor() { }

  games(): Game[]{
    return this.gam;
  }
}
