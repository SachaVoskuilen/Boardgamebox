import { FC } from 'react';
import { faHamburger, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { StyledHamburger } from '.';

export const HamburgerMenu: FC<{}> = ({}) => {
  return (
    <StyledHamburger>
      <Link href={'/owned'}>
        <FontAwesomeIcon icon={faHamburger} width="30px" />
        Owned
      </Link>
      <Link href={'/liked'}>
        <FontAwesomeIcon icon={faHeart} width="30px" />
        Likes
      </Link>
    </StyledHamburger>
  );
};
