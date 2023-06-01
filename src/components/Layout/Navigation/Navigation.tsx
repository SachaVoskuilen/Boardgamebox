import { Box, Flex, StyledText, defaultBreakingPoints } from '@/styles';
import { NavigationStyle, NavigationType } from '.';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHeart, faHouse, faRightFromBracket, faSearch, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import NavButton from './Clickable/NavButton';
import NavLink from './Clickable/NavLink';

export const Navigation: FC<NavigationType> = ({ menu, setMenu, windowSize }: NavigationType) => {
  const homeIcon = <FontAwesomeIcon icon={faHouse} width="30px" />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} width="30px" />;
  const ownIcon = <FontAwesomeIcon icon={faWarehouse} width={'30px'} />;
  const likeIcon = <FontAwesomeIcon icon={faHeart} width={'30px'} />;
  const settingsIcon = <FontAwesomeIcon icon={faGear} width={'30px'} />;

  function setBurger() {
    if (menu == 'default') {
      setMenu('hamburger');
    } else {
      setMenu('default');
    }
  }

  return (
    <Box>
      {windowSize.width >= defaultBreakingPoints.laptop ? (
        <NavigationStyle variant={'web'}>
          <Flex>
            <NavLink href={'/'} icon={homeIcon}>
              <StyledText>Home</StyledText>
            </NavLink>
            <NavLink href={'/search'} icon={searchIcon}>
              <StyledText>Search</StyledText>
            </NavLink>
            <NavLink href={'/own'} icon={ownIcon}>
              <StyledText>Own</StyledText>
            </NavLink>
            <NavLink href={'/like'} icon={likeIcon}>
              <StyledText>Like</StyledText>
            </NavLink>
          </Flex>
          <NavButton icon={settingsIcon} controlMenu={setBurger} isActive={menu != 'default'} />
        </NavigationStyle>
      ) : (
        <NavigationStyle variant={'mobile'}>
          <NavLink href={'/'} icon={homeIcon} />
          <NavLink href={'/search'} icon={searchIcon} />
          <NavLink href={'/own'} icon={ownIcon} />
          <NavLink href={'/like'} icon={likeIcon} />
          <NavButton icon={settingsIcon} controlMenu={setBurger} isActive={menu != 'default'} />
        </NavigationStyle>
      )}
    </Box>
  );
};
