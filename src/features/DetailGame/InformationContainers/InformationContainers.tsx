import { BoardGameType } from '@/types';
import { FC, useEffect, useState } from 'react';
import { DetailContentButton, StyledDetailInformationContainerLayout } from '.';
import { windowSizeType } from '@/components';
import { H1Title, defaultBreakingPoints } from '@/styles';

type GameProps = {
  game: BoardGameType;
};

type contentStatesType = {
  [key: string]: boolean;
};

export const InformationContainers: FC<GameProps> = ({ game }) => {
  const [windowSize, setWindowSize] = useState<windowSizeType>({ height: 100, width: 100 });

  const [contentStates, setContentStates] = useState<contentStatesType>({
    general: false,
    rating: false,
    faq: false,
    production: false,
  });

  useEffect(() => {
    // On mount
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });

    // Watch
    const handleWindowResize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const showContent: FC<string> = (name: string) => {
    setContentStates({ ...contentStates, [name]: !contentStates[name] });
  };

  useEffect(() => {
    if (
      Object.values(contentStates).every((item) => item === false) &&
      windowSize.width >= defaultBreakingPoints.laptop
    ) {
      setContentStates({ ...contentStates, general: !contentStates.general });
      console.log('Should all be false');
    }
  }, [contentStates]);

  if (windowSize.width >= defaultBreakingPoints.laptop) {
    return (
      <StyledDetailInformationContainerLayout>
        <button>
          <H1Title $line={true} $bold={true}>
            ContentNav
          </H1Title>
        </button>
        <div>container</div>
        <div>container</div>
      </StyledDetailInformationContainerLayout>
    );
  } else {
    return (
      <StyledDetailInformationContainerLayout>
        <DetailContentButton name={'general'} state={contentStates.general!} changeContent={showContent} />
        {contentStates.general && <div>content</div>}
        {/* {general && <DetailContent comonent={generalContent} />} */}
        <DetailContentButton name={'rating'} state={contentStates.rating!} changeContent={showContent} />
        {contentStates.rating && <div>content</div>}
        <DetailContentButton name={'faq'} state={contentStates.faq!} changeContent={showContent} />
        {contentStates.faq && <div>content</div>}
        <DetailContentButton name={'production'} state={contentStates.production!} changeContent={showContent} />
        {contentStates.production && <div>content</div>}
      </StyledDetailInformationContainerLayout>
    );
  }
};
