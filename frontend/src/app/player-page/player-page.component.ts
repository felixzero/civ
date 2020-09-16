import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card, CardStatus} from '../services/game-types.type';
import {BackendClientService} from '../services/backend-client.service';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  username = '';
  userId!: string;
  boughtCards: Card[] = [];
  cardsToBuy: Card[] = [];
  CardStatus = CardStatus;

  constructor(private route: ActivatedRoute, private backendClientService: BackendClientService) {
    this.route.params.subscribe(params => {
      this.username = params.username;
      this.userId = params.id;
    });
  }

  get checkoutTotal() {
    return this.cardsToBuy
      .filter(card => card.status === CardStatus.SELECTED)
      .map(card => card.price)
      .reduce((x, y) => x + y, 0);
  }

  private set cards(cards: Card[]) {
    this.boughtCards = cards.filter(card => card.status === CardStatus.BOUGHT);
    this.cardsToBuy = cards.filter(card => card.status !== CardStatus.BOUGHT);
  }

  ngOnInit(): void {
    this.backendClientService.getCardsOfPlayer(this.userId).subscribe(cards => {
      this.cards = cards;
    });
  }

  validatePurchase() {
    this.backendClientService
      .checkoutPlayer(this.userId, this.cardsToBuy.filter(card => card.status === CardStatus.SELECTED))
      .subscribe(cards => this.cards = cards);
  }

  removeCard(card: Card) {
    this.backendClientService
      .deleteCardFromHand(this.userId, card.cardName)
      .subscribe(cards => this.cards = cards);
  }
}
