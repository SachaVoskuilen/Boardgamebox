import { BoardGameType } from '@/types';
import { FC, useEffect, useState } from 'react';
import { StyledDetailTop, StyledDetailGame, StyledTopButton, StyledTopFlex, DetailTop } from '.';
import { Flex, H1Title, H2Title, StyledText } from '@/styles';
import router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHeart, faWarehouse } from '@fortawesome/free-solid-svg-icons';

type GameProps = {
  game: BoardGameType;
};

export const DetailGame: FC<GameProps> = ({ game }) => {
  return (
    <StyledDetailGame>
      <DetailTop image={game.image_url!} name={game.name!} description={game.description_preview!} />
      <p>Detailgame = {game.name}</p>
    </StyledDetailGame>
  );
};
