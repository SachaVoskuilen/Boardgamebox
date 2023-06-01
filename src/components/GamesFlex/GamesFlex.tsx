import { FC } from 'react';
import { StyledGamesFlex } from '.';
import { BoardGameType } from '@/types';
import { SimpleGame } from '..';

type Props = {
  games: Array<BoardGameType>;
  type?: string;
};

export const GamesFlex: FC<Props> = ({ games, type }) => {
  return (
    <StyledGamesFlex>
      {games.map((game) => (
        <SimpleGame game={game} key={`${type}${game.id}`} />
      ))}
    </StyledGamesFlex>
  );
};
