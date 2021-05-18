import { GamesService } from './games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from './game/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  games: Game[];

  constructor(private gamesService: GamesService ) { }

  ngOnInit(): void {
  this.games = this.gamesService.games();
  }

}
