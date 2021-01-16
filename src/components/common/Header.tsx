import { FC, HTMLAttributes } from 'react';
import Link from 'next/link';

import { Logo } from 'assets';
import {
  Container,
  LogoContainer,
  Navbar,
  NavbarLi,
} from 'styles/components/common/Header';
import Button from 'styles/components/common/Button';

interface NavbarItemProps {
  href: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ href, children }) => (
  <NavbarLi>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </NavbarLi>
);

type Props = HTMLAttributes<HTMLElement>;

const Header: FC<Props> = (props) => (
  <Container {...props}>
    <Link href="/" passHref>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Link>

    <Navbar>
      <ul>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/">About</NavbarItem>
        <NavbarItem href="/">Contact</NavbarItem>
        <NavbarItem href="/">Blog</NavbarItem>
        <NavbarItem href="/">Careers</NavbarItem>
      </ul>
    </Navbar>

    <Link href="/" passHref>
      <Button as="a">Request Invite</Button>
    </Link>
  </Container>
);

export default Header;
