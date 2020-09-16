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

export enum CardType {
  CRAFT,
  SCIENCE,
  ART,
  RELIGION,
  CIVIC,
  SCIENCE_ART,
  CRAFT_SCIENCE,
  ART_RELIGION,
  ART_CIVIC
}

export enum CardStatus {
  BOUGHT = 'BOUGHT',
  SELECTED = 'SELECTED',
  UNSELECTED = 'UNSELECTED'
}

export const civilizationToString = (civilization: Civilization) => {
  switch (civilization) {
    case Civilization.AFRICA:
      return 'Afrique';
    case Civilization.ITALY_IBERIA:
      return 'Italie / Ibérie';
    case Civilization.ILLYRIA:
      return 'Illyrie';
    case Civilization.THRACE:
      return 'Thrace';
    case Civilization.CRETE:
      return 'Crète';
    case Civilization.ASIA:
      return 'Asie';
    case Civilization.ASSYRIA:
      return 'Assyrie';
    case Civilization.BABYLON:
      return 'Babylone';
    case Civilization.EGYPT:
      return 'Égypte';
  }
}
