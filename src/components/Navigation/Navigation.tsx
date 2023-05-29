import { Box, Flex, defaultBreakingPoints } from '@/styles';
import { NavigationLogo, NavigationStyle, NavigationType } from '.';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHamburger, faHeart, faHouse, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Navigation = ({ menu, setMenu, windowSize }: NavigationType) => {
  return (
    <Box>
      {windowSize.width >= defaultBreakingPoints.laptop ? (
        <NavigationStyle variant={'web'}>
          <Flex>
            <button onClick={() => (menu == 'default' ? setMenu('hamburger') : setMenu('default'))}>
              <FontAwesomeIcon icon={faBars} width="30px" />
            </button>
            <Link href={'/'}>
              <FontAwesomeIcon icon={faHouse} width="30px" />
            </Link>
            <Link href={'/search'}>
              <FontAwesomeIcon icon={faSearch} width="30px" />
            </Link>
          </Flex>
          <Link href={''}>
            <FontAwesomeIcon icon={faRightFromBracket} width="30px" />
          </Link>
        </NavigationStyle>
      ) : (
        <NavigationStyle variant={'mobile'}>
          <Link href={'/'}>
            <FontAwesomeIcon icon={faHouse} width="30px" />
          </Link>
          <Link href={'/search'}>
            <FontAwesomeIcon icon={faSearch} width="30px" />
          </Link>
          <Link href={'/owned'}>
            <FontAwesomeIcon icon={faHamburger} width="30px" />
          </Link>
          <Link href={'/liked'}>
            <FontAwesomeIcon icon={faHeart} width="30px" />
          </Link>
          <button onClick={() => (menu == 'default' ? setMenu('hamburger') : setMenu('default'))}>
            <FontAwesomeIcon icon={faBars} width="30px" />
          </button>
        </NavigationStyle>
      )}
    </Box>
  );
};
