import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Card, Civilization, Player} from './game-types.type';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendClientService {
  constructor(private http: HttpClient) {}

  createNewGame(): Observable<string> {
    return this.http.post(`${environment.backendHostName}/games`, '', { responseType: 'text' });
  }

  getPlayersInGame(gameSlug: string) {
    return this.http.get<Player[]>(`${environment.backendHostName}/games/${gameSlug}/players`);
  }

  addPlayerToGame(gameSlug: string, username: string, civilization: Civilization) {
    return this.http.post<Player[]>(`${environment.backendHostName}/games/${gameSlug}/add-player`, { username, civilization });
  }

  getCardsOfPlayer(playerId: string) {
    return this.http.get<Card[]>(`${environment.backendHostName}/cards/${playerId}`);
  }

  checkoutPlayer(playerId: string, cardsToBuy: Card[]) {
    return this.http.post<Card[]>(`${environment.backendHostName}/cards/${playerId}`, cardsToBuy);
  }

  deleteCardFromHand(playerId: string, cardId: string) {
    return this.http.delete<Card[]>(`${environment.backendHostName}/cards/${playerId}/${cardId}`);
  }
}
