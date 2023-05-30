import { MarkerType, QuestionType, RatingType } from '.';

export interface BoardGameType {
  id?: string;
  name: string;
  year: number;
  shortDescription?: string;
  description?: string;
  thumbnail?: string;
  image?: string;
  minPlayers?: number;
  maxPlayers?: number;
  recPlayers?: number;
  minPlaytime?: number;
  maxPlaytime?: number;
  avgPlaytime?: number;
  minAge?: number;
  maxAge?: number;
  createdAt?: number;
  updatedAt?: number;
  markers?: Array<MarkerType>;
  ratings?: Array<RatingType>;
  questions?: Array<QuestionType>;
}
