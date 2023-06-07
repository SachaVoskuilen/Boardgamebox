import { FC } from 'react';
import { SimpleGame, StyledGamesGrid } from '.';
import { BoardGameType } from '@/types';
import Link from 'next/link';

type Props = {
  games: Array<BoardGameType>;
  type?: string;
};

export const GamesGrid: FC<Props> = ({ games, type }) => {
  return (
    <StyledGamesGrid>
      {games.map((game) => (
        <Link href={`/game/${game.id}`} key={`${type}${game.id}`}>
          <SimpleGame game={game} />
        </Link>
      ))}
    </StyledGamesGrid>
  );
};
