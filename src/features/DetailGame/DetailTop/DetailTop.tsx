import { Box, Flex, H1Title, H2Title, StyledText } from '@/styles';
import router from 'next/router';
import { StyledDetailTop, StyledTopButton, StyledTopFlex } from '.';
import { faChevronLeft, faWarehouse, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, FC } from 'react';
import { usePostInteraction } from '@/hooks';

type DetailTopType = {
  image: string;
  name: string;
  description: string;
};

export const DetailTop: FC<DetailTopType> = ({ image, name, description }) => {
  const [collection, setCollection] = useState<boolean>(false);
  const [liked, setLike] = useState<boolean>(false);

  const { mutate: addInteraction } = usePostInteraction();

  const returnIcon = <FontAwesomeIcon icon={faChevronLeft} />;
  const ownIcon = <FontAwesomeIcon icon={faWarehouse} />;
  const likeIcon = <FontAwesomeIcon icon={faHeart} />;

  const updateInteraction = (type: string) => {
    switch (type) {
      case 'own':
        setCollection(!collection);
        break;
      case 'like':
        const newLiked = !liked;
        setLike(newLiked);
        if (newLiked) {
          addInteraction(
            {
              userId: 'clid8387p0000eh8kuael2kp5',
              boardGameId: 'sdoif',
              interactionTagId: 1,
            },
            {
              onSuccess(data) {
                console.log(data);
              },
              onError(error) {
                console.log(error);
              },
            },
          );
        } else {
          console.log('Should delete');
        }
        break;
      default:
        break;
    }
    // addInteraction({
    //   ...data,
    // });
    // const update = usePostInteraction();
  };

  // function updateCollection() {
  //   setCollection(!collection);
  // }

  // function updateLike() {
  //   setLike(!liked);
  // }

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
