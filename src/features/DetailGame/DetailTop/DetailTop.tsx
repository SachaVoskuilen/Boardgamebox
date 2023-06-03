import { Box, Flex, H1Title, H2Title, StyledText } from '@/styles';
import router from 'next/router';
import { StyledDetailTop, StyledTopButton, StyledTopFlex } from '.';
import { faChevronLeft, faWarehouse, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, FC } from 'react';

type DetailTopType = {
  image: string;
  name: string;
  description: string;
};

export const DetailTop: FC<DetailTopType> = ({ image, name, description }) => {
  const [collection, setCollection] = useState<boolean>(false);
  const [liked, setLike] = useState<boolean>(false);

  const returnIcon = <FontAwesomeIcon icon={faChevronLeft} />;
  const ownIcon = <FontAwesomeIcon icon={faWarehouse} />;
  const likeIcon = <FontAwesomeIcon icon={faHeart} />;

  function updateCollection() {
    setCollection(!collection);
  }

  function updateLike() {
    setLike(!liked);
  }

  useEffect(() => {
    console.log(collection, liked);
  }, [collection, liked]);

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
          <StyledTopButton onClick={updateCollection}>
            <Flex maxHeight={'30px'} width={'30px'} color={collection ? 'color5' : 'black'}>
              {ownIcon}
            </Flex>
            <H2Title $bold={true}>Own</H2Title>
          </StyledTopButton>
          <StyledTopButton onClick={updateLike}>
            <Flex maxHeight={'30px'} width={'30px'} color={liked ? 'red' : 'black'}>
              {likeIcon}
            </Flex>
            <H2Title $bold={true}>Like</H2Title>
          </StyledTopButton>
        </StyledTopFlex>
      </Box>
      <Box>
        <H1Title $bold={true} margin={'25px 0 0 0'}>
          {name}
        </H1Title>
        <StyledText>{`${description.split('.').slice(0, 2).join('. ')}.`}</StyledText>
      </Box>
    </StyledDetailTop>
  );
};
