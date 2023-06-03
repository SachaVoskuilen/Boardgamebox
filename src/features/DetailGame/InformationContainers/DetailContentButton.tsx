import { H1Title } from '@/styles';
import { FC } from 'react';
import { StyledDetailContentButton } from './detailContentButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faClose } from '@fortawesome/free-solid-svg-icons';

type DetailContentButtonType = {
  name: string;
  state: boolean;
  changeContent: (name: string) => void;
};

export const DetailContentButton: FC<DetailContentButtonType> = ({ name, state, changeContent }) => {
  const toOpenIcon = <FontAwesomeIcon icon={faChevronDown} height={'14px'} />;
  const toCloseIcon = <FontAwesomeIcon icon={faChevronUp} height={'14px'} />;

  return (
    <StyledDetailContentButton onClick={() => changeContent(name)}>
      <H1Title $line={true} $bold={true} style={{ textTransform: 'capitalize' }}>
        {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
      </H1Title>
      {state ? toCloseIcon : toOpenIcon}
    </StyledDetailContentButton>
  );
};
