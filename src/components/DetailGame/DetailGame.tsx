import { BoardGameType } from '@/types';
import { FC } from 'react';

type GameProps = {
  game: BoardGameType;
};

export const DetailGame: FC<GameProps> = ({ game }) => {
  return <div>Detailgame = {game.name}</div>;
};
