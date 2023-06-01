import { FC } from 'react';
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { StyledHamburger } from '.';
import { StyledText } from '@/styles';
import { signIn, signOut, useSession } from 'next-auth/react';

export const HamburgerMenu: FC = () => {
  const { data: session, status } = useSession();

  // if (status === 'authenticated') {
  //   return <p>Signed in as {session.user.email}</p>;
  // }

  return (
    <StyledHamburger>
      {status == 'authenticated' && <StyledText>Welkom {session.user.name}</StyledText>}
      {status != 'authenticated' ? (
        <button onClick={() => signIn()}>
          <FontAwesomeIcon icon={faRightToBracket} width="30px" /> Sign in
        </button>
      ) : (
        <button onClick={() => signOut()}>
          <FontAwesomeIcon icon={faRightFromBracket} width="30px" /> Sign out
        </button>
      )}
    </StyledHamburger>
  );
};
