import { FC } from 'react';
import { StyledGamesGrid } from '.';
import { BoardGameType } from '@/types';
import { SimpleGame } from '..';
import Link from 'next/link';

type Props = {
  games: Array<BoardGameType>;
  type?: string;
};

export const GamesGrid: FC<Props> = ({ games, type }) => {
  return (
    <StyledGamesGrid>
      {games.map((game) => (
        <Link href={`/game/${game.id}`}>
          <SimpleGame game={game} key={`${type}${game.id}`} />
        </Link>
      ))}
    </StyledGamesGrid>
  );
};
