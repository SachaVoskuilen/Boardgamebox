import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';
import { StyledNavLink } from '.';

interface NavbarLinkProps extends LinkProps {
  icon: React.ReactNode;
}

const NavLink: FC<PropsWithChildren<NavbarLinkProps>> = ({ href, icon, children }) => {
  const router = useRouter();
  const isActive = router.pathname == href.toString() ? true : false;
  return (
    <StyledNavLink href={href} $isActive={isActive}>
      {icon}
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
