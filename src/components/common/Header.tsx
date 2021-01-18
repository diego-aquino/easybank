import { FC, HTMLAttributes } from 'react';
import Link from 'next/link';

import { Logo, HamburgerIcon } from 'assets';
import { useToggle } from 'hooks';
import {
  Container,
  LogoContainer,
  Navbar,
  NavbarLinkUl,
  NavbarLi,
  RequestInviteAnchor,
  ToggleNavbarModalButton,
  StyledCloseIcon,
} from 'styles/components/common/Header';

interface NavbarLinkProps {
  href: string;
}

const NavbarLinkItem: FC<NavbarLinkProps> = ({ href, children }) => (
  <NavbarLi>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </NavbarLi>
);

type Props = HTMLAttributes<HTMLElement>;

const Header: FC<Props> = (props) => {
  const [navbarModalIsActive, toggleNavbarModalIsActive] = useToggle();

  return (
    <Container {...props}>
      <Link href="/" passHref>
        <LogoContainer>
          <Logo styleMode="primary" />
        </LogoContainer>
      </Link>

      <Navbar modalActive={navbarModalIsActive}>
        <NavbarLinkUl>
          <NavbarLinkItem href="/">Home</NavbarLinkItem>
          <NavbarLinkItem href="/">About</NavbarLinkItem>
          <NavbarLinkItem href="/">Contact</NavbarLinkItem>
          <NavbarLinkItem href="/">Blog</NavbarLinkItem>
          <NavbarLinkItem href="/">Careers</NavbarLinkItem>
        </NavbarLinkUl>
        <ToggleNavbarModalButton onClick={toggleNavbarModalIsActive}>
          {navbarModalIsActive ? <StyledCloseIcon /> : <HamburgerIcon />}
        </ToggleNavbarModalButton>
      </Navbar>

      <Link href="/" passHref>
        <RequestInviteAnchor>Request Invite</RequestInviteAnchor>
      </Link>
    </Container>
  );
};

export default Header;
