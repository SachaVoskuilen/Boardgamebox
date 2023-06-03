import { BoardGameType } from '@/types';
import { FC } from 'react';
import { StyledDetailGame, DetailTop, InformationContainers } from '.';

type GameProps = {
  game: BoardGameType;
};

export const DetailGame: FC<GameProps> = ({ game }) => {
  return (
    <StyledDetailGame>
      <DetailTop image={game.image_url!} name={game.name!} description={game.description_preview!} />
      <InformationContainers game={game} />
    </StyledDetailGame>
  );
};
