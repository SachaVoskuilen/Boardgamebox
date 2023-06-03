import { BoardGameType } from '@/types';
import { FC, useEffect, useState } from 'react';
import { DetailContentButton, StyledDetailContentButton, StyledDetailInformationContainerLayout } from '.';
import { windowSizeType } from '@/components';
import { H1Title, defaultBreakingPoints } from '@/styles';

type GameProps = {
  game: BoardGameType;
};

export const InformationContainers: FC<GameProps> = ({ game }) => {
  const [windowSize, setWindowSize] = useState<windowSizeType>({ height: 100, width: 100 });

  const [general, setGeneral] = useState<boolean>(false);
  const [rating, setRating] = useState<boolean>(false);
  const [faq, setFaq] = useState<boolean>(false);
  const [production, setProduction] = useState<boolean>(false);

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
    switch (name) {
      case 'general':
        setGeneral(!general);
        break;
      case 'rating':
        setRating(!rating);
        break;
      case 'faq':
        setFaq(!faq);
        break;
      case 'production':
        setProduction(!production);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(general);
  }, [general]);

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
        <DetailContentButton name={'general'} state={general} changeContent={showContent} />
        {general && <div>content</div>}
        {/* {general && <DetailContent comonent={generalContent} />} */}
        <DetailContentButton name={'rating'} state={rating} changeContent={showContent} />
        {rating && <div>content</div>}
        <DetailContentButton name={'faq'} state={faq} changeContent={showContent} />
        {faq && <div>content</div>}
        <DetailContentButton name={'production'} state={production} changeContent={showContent} />
        {production && <div>content</div>}
      </StyledDetailInformationContainerLayout>
    );
  }
};
