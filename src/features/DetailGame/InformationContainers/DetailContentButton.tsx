import { H1Title } from '@/styles';
import { FC } from 'react';
import { StyledDetailContentButton } from './detailContentButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { CapitalFirstCharacter } from '@/utils';

type DetailContentButtonType = {
  name: string;
  state: boolean;
  changeContent: (name: string) => void;
  icon?: boolean;
};

export const DetailContentButton: FC<DetailContentButtonType> = ({ name, state, changeContent, icon = false }) => {
  const toOpenIcon = <FontAwesomeIcon icon={faChevronDown} height={'14px'} />;
  const toCloseIcon = <FontAwesomeIcon icon={faChevronUp} height={'14px'} />;

  const active: boolean = !icon && state ? true : false;

  return (
    <StyledDetailContentButton onClick={() => changeContent(name)} active={active}>
      <H1Title $line $bold>
        {CapitalFirstCharacter(name)}
      </H1Title>
      {icon && <div>{state ? toCloseIcon : toOpenIcon}</div>}
    </StyledDetailContentButton>
  );
};
