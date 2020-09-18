export interface Player {
  id: string;
  username: string;
  civilization: Civilization;
  score: number;
}

export interface Card {
  cardName: string;
  cardType: 'CRAFT' | 'SCIENCE' | 'ART' | 'RELIGION' | 'CIVIC' | 'SCIENCE_ART' | 'CRAFT_SCIENCE' | 'ART_RELIGION' | 'ART_CIVIC';
  faceValue: number;
  price: number;
  status: CardStatus;
}

export enum Civilization {
  AFRICA,
  ITALY_IBERIA,
  ILLYRIA,
  THRACE,
  CRETE,
  ASIA,
  ASSYRIA,
  BABYLON,
  EGYPT
}

export enum CardStatus {
  BOUGHT = 'BOUGHT',
  SELECTED = 'SELECTED',
  UNSELECTED = 'UNSELECTED'
}
