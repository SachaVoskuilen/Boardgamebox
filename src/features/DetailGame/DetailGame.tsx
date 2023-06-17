import { BoardGameType } from '@/types';
import { FC } from 'react';
import { StyledDetailGame, DetailTop, InformationContainers } from '.';

type GameProps = {
  game: BoardGameType;
};

export const DetailGame: FC<GameProps> = ({ game }) => {
  return (
    <StyledDetailGame>
      <DetailTop
        id={game.id}
        image={
          game.image_url
            ? game.image_url
            : 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'
        }
        name={game.name ? game.name : 'Name not found'}
        description={game.description_preview ? game.description_preview : 'No description found'}
      />
      <InformationContainers game={game} />
    </StyledDetailGame>
  );
};
