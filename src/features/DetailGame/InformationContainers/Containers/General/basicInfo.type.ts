export interface BasicInfoType {
  age?: number;
  players?: {
    minPlayers?: number;
    maxPlayers?: number;
    recPlayers?: number;
  };
  duration?: {
    minDuration?: number;
    maxDuration?: number;
    avgDuration?: number;
  };
  weight?: number;
}
