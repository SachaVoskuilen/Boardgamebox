import { FC } from 'react';
import { StyledGamesFlex } from '.';
import { BoardGameType } from '@/types';
import { SimpleGame } from '..';
import Link from 'next/link';

type Props = {
  games: Array<BoardGameType>;
  type?: string;
};

export const GamesFlex: FC<Props> = ({ games, type }) => {
  return (
    <StyledGamesFlex>
      {games.map((game) => (
        <Link href={`/game/${game.id}`}>
          <SimpleGame game={game} key={`${type}${game.id}`} />
        </Link>
      ))}
    </StyledGamesFlex>
  );
};
