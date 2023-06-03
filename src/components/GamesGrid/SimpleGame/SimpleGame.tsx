import { FC } from 'react';
import { StyledSimpleGame } from '.';
import Image from 'next/image';
import { BoardGameType } from '@/types';
import { Box, Flex, GameTitle, StyledText } from '@/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faScaleUnbalanced, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

type Props = {
  game: BoardGameType;
  type?: string;
};

const ICONCOLOR = {
  color: 5,
};

export const SimpleGame: FC<Props> = ({ game }) => {
  return (
    <StyledSimpleGame>
      <Image
        src={
          game.image_url || 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'
        }
        width={120}
        height={120}
        alt={`Image of the ${game.name}`}
        style={{ objectFit: 'contain' }}
      />
      <Box margin={'0 25px'}>
        <GameTitle>{game.name}</GameTitle>
        <Flex justifyContent={'space-between'} flexDirection={'column'}>
          <Flex height={'25px'} minWidth={'80px'} justifyContent={'start'} alignItems={'center'} margin={'0 20px 0 0'}>
            <StyledText width={'25px'} color={`color${ICONCOLOR.color}`}>
              <FontAwesomeIcon icon={faStar} height="14px" />
            </StyledText>
            <StyledText>{(Math.round(game.average_user_rating! * 100) / 100).toFixed(2)} / 5</StyledText>
          </Flex>
          <Flex height={'25px'} minWidth={'80px'} justifyContent={'start'} alignItems={'center'} margin={'0 20px 0 0'}>
            <Flex width={'25px'} color={`color${ICONCOLOR.color}`}>
              <FontAwesomeIcon icon={faUsers} height="14px" />
            </Flex>
            <StyledText>
              {game.min_players} - {game.max_players}
            </StyledText>
          </Flex>
          <Flex height={'25px'} minWidth={'80px'} justifyContent={'start'} alignItems={'center'} margin={'0 20px 0 0'}>
            <Flex width={'25px'} color={`color${ICONCOLOR.color}`}>
              <FontAwesomeIcon icon={faClock} height="14px" />
            </Flex>
            <StyledText>
              {game.min_playtime} - {game.max_playtime}
            </StyledText>
          </Flex>
          <Flex height={'25px'} minWidth={'80px'} justifyContent={'start'} alignItems={'center'} margin={'0 20px 0 0'}>
            <Flex width={'25px'} color={`color${ICONCOLOR.color}`}>
              <FontAwesomeIcon icon={faScaleUnbalanced} height="14px" />
            </Flex>
            <StyledText>{(Math.round(game.average_learning_complexity! * 100) / 100).toFixed(2)} / 5</StyledText>
          </Flex>
        </Flex>
      </Box>
    </StyledSimpleGame>
  );
};
