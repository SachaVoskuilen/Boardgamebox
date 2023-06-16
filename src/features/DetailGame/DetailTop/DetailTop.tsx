import { Box, Flex, H1Title, H2Title, StyledText } from '@/styles';
import router from 'next/router';
import { StyledDetailTop, StyledTopButton, StyledTopFlex } from '.';
import { faChevronLeft, faWarehouse, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, FC } from 'react';
import { fetchApi } from '@/utils';
import { InteractionType } from '@/types';

type DetailTopType = {
  id: string;
  image: string;
  name: string;
  description: string;
};

export const DetailTop: FC<DetailTopType> = ({ id, image, name, description }) => {
  const [collection, setCollection] = useState<boolean>(false);
  const [liked, setLike] = useState<boolean>(false);
  const [loggedin, setLoggedin] = useState<boolean>(true);

  const returnIcon = <FontAwesomeIcon icon={faChevronLeft} />;
  const ownIcon = <FontAwesomeIcon icon={faWarehouse} />;
  const likeIcon = <FontAwesomeIcon icon={faHeart} />;

  const updateInteraction = async (type: string) => {
    switch (type) {
      case 'own':
        setCollection(!collection);
        break;
      case 'like':
        const newLiked = !liked;
        setLike(newLiked);
        if (newLiked) {
          const succes = await updateInteractionFetch(
            {
              userId: '',
              boardGameId: id,
              interactionTagId: 1,
            },
            'POST',
          );
          if (succes.message == 'Not logged in') {
            setLoggedin(false);
          }
        } else {
          const succes = await updateInteractionFetch(
            {
              userId: '',
              boardGameId: id,
              interactionTagId: 1,
            },
            'DELETE',
          );
          if (succes.message == 'Not logged in') {
            setLoggedin(false);
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <StyledDetailTop>
      <Box>
        <img src={image} alt={'Image text'} width={300} height={300} />
        <StyledTopFlex>
          <StyledTopButton type="button" onClick={() => router.back()}>
            <Flex maxHeight={'30px'} width={'30px'}>
              {returnIcon}
            </Flex>
          </StyledTopButton>
          <StyledTopButton onClick={() => updateInteraction('own')}>
            <Flex maxHeight={'30px'} width={'30px'} color={collection ? 'color5' : 'black'}>
              {ownIcon}
            </Flex>
            <H2Title $bold>Own</H2Title>
          </StyledTopButton>
          <StyledTopButton onClick={() => updateInteraction('like')}>
            <Flex maxHeight={'30px'} width={'30px'} color={liked ? 'red' : 'black'}>
              {likeIcon}
            </Flex>
            <H2Title $bold>Like</H2Title>
          </StyledTopButton>
        </StyledTopFlex>
        {!loggedin && (
          <Flex color={'red'} justifyContent={'center'} alignItems={'center'} height={'30px'}>
            <StyledText>You can't edit, you're not loggedin</StyledText>
          </Flex>
        )}
      </Box>
      <Box>
        <H1Title $bold margin={'25px 0 0 0'}>
          {name}
        </H1Title>
        <StyledText>{`${description.split('.').slice(0, 2).join('. ')}.`}</StyledText>
      </Box>
    </StyledDetailTop>
  );
};

const updateInteractionFetch = async (interaction: InteractionType, updateMethod: string) => {
  return await fetchApi(`http://localhost:3000/api/interaction`, {
    method: updateMethod,
    body: JSON.stringify(interaction),
  });
};
