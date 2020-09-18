import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendClientService} from '../services/backend-client.service';
import {Player} from '../services/game-types.type';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {
  gameSlug: string | null = null;
  players: Player[] = [];

  constructor(private backendClientService: BackendClientService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameSlug = params.gameSlug;

      this.backendClientService
        .getPlayersInGame(this.gameSlug)
        .subscribe(players => this.players = players.sort((p1, p2) => (p2.score - p1.score)));
    });
  }
}
