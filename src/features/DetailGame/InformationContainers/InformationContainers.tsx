import { BoardGameType } from '@/types';
import { FC, useEffect, useState } from 'react';
import { DetailContentButton, StyledDetailContentLargeNavigation, StyledDetailInformationContainerLayout } from '.';
import { defaultBreakingPoints } from '@/styles';
import { FaqContainer, GeneralContainer, ProductionContainer, RatingContainer } from './Containers';
import { useWindowState } from '@/hooks';

type GameProps = {
  game: BoardGameType;
};

type contentStatesType = {
  [key: string]: boolean;
  general: boolean;
  rating: boolean;
  faq: boolean;
  production: boolean;
};

const DEFAULTCONTENTSTATES = {
  general: false,
  rating: false,
  faq: false,
  production: false,
};

export const InformationContainers: FC<GameProps> = ({ game }) => {
  const { windowSize } = useWindowState();
  const [contentStates, setContentStates] = useState<contentStatesType>(DEFAULTCONTENTSTATES);

  const showContent: FC<string> = (name: string) => {
    setContentStates({ ...DEFAULTCONTENTSTATES, [name]: !contentStates[name] });
    return null;
  };

  useEffect(() => {
    if (
      Object.values(contentStates).every((item) => item === false) &&
      windowSize.width >= defaultBreakingPoints.laptop
    ) {
      setContentStates({ ...contentStates, general: !contentStates.general });
    }
  }, [contentStates]);

  if (windowSize.width >= defaultBreakingPoints.laptop) {
    return (
      <StyledDetailInformationContainerLayout>
        <StyledDetailContentLargeNavigation>
          <DetailContentButton name={'general'} state={contentStates.general} changeContent={showContent} />
          <DetailContentButton name={'rating'} state={contentStates.rating} changeContent={showContent} />
          <DetailContentButton name={'faq'} state={contentStates.faq} changeContent={showContent} />
          <DetailContentButton name={'production'} state={contentStates.production} changeContent={showContent} />
        </StyledDetailContentLargeNavigation>
        {contentStates.general && <GeneralContainer game={game} />}
        {contentStates.rating && <RatingContainer />}
        {contentStates.faq && <FaqContainer />}
        {contentStates.production && <ProductionContainer />}
      </StyledDetailInformationContainerLayout>
    );
  } else {
    return (
      <StyledDetailInformationContainerLayout>
        <DetailContentButton name={'general'} state={contentStates.general} changeContent={showContent} icon={true} />
        {contentStates.general && <GeneralContainer game={game} />}
        <DetailContentButton name={'rating'} state={contentStates.rating} changeContent={showContent} icon={true} />
        {contentStates.rating && <RatingContainer />}
        <DetailContentButton name={'faq'} state={contentStates.faq} changeContent={showContent} icon={true} />
        {contentStates.faq && <FaqContainer />}
        <DetailContentButton
          name={'production'}
          state={contentStates.production}
          changeContent={showContent}
          icon={true}
        />
        {contentStates.production && <ProductionContainer />}
      </StyledDetailInformationContainerLayout>
    );
  }
};
