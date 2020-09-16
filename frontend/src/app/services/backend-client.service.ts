import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Card, CardStatus, CardType, Civilization, Player} from './game-types.type';
import {HttpClient} from '@angular/common/http';

const BACKEND_HOST_NAME = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {
  constructor(private http: HttpClient) {}

  createNewGame(): Observable<string> {
    return this.http.post(`${BACKEND_HOST_NAME}/games`, '', { responseType: 'text' });
  }

  getPlayersInGame(gameSlug: string) {
    return this.http.get<Player[]>(`${BACKEND_HOST_NAME}/games/${gameSlug}/players`);
  }

  addPlayerToGame(gameSlug: string, username: string, civilization: Civilization) {
    return this.http.post<Player[]>(`${BACKEND_HOST_NAME}/games/${gameSlug}/add-player`, { username, civilization });
  }

  getCardsOfPlayer(playerId: string) {
    return this.http.get<Card[]>(`${BACKEND_HOST_NAME}/cards/${playerId}`);
  }

  checkoutPlayer(playerId: string, cardsToBuy: Card[]) {
    return this.http.post<Card[]>(`${BACKEND_HOST_NAME}/cards/${playerId}`, cardsToBuy);
  }

  deleteCardFromHand(playerId: string, cardId: string) {
    return this.http.delete<Card[]>(`${BACKEND_HOST_NAME}/cards/${playerId}/${cardId}`);
  }
}
