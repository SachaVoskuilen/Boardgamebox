import { FC, PropsWithChildren } from 'react';
import { StyledNavButton } from '.';

interface NavbarButtonProps {
  icon: React.ReactNode;
  controlMenu: () => void;
  isActive: boolean;
}

const NavButton: FC<PropsWithChildren<NavbarButtonProps>> = ({ icon, controlMenu, isActive, children }) => {
  return (
    <StyledNavButton $isActive={isActive} onClick={controlMenu}>
      {icon}
      {children}
    </StyledNavButton>
  );
};

export default NavButton;
