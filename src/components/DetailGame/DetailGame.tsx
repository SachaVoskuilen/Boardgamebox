import { BoardGameType } from '@/types';
import { FC } from 'react';
import { DetailTop, StyledDetailGame } from '.';
import Image from 'next/image';
import { Box, Grid } from '@/styles';

type GameProps = {
  game: BoardGameType;
};

export const DetailGame: FC<GameProps> = ({ game }) => {
  return (
    <StyledDetailGame>
      <DetailTop>
        <img src={game.image_url!} alt={'Image text'} width={300} height={300} />
      </DetailTop>
      Detailgame = {game.name}
    </StyledDetailGame>
  );
};
