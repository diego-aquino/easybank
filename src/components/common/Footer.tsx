import { FC } from 'react';
import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  PinterestIcon,
  TwitterIcon,
  YouTubeIcon,
} from 'assets';
import { Anchor } from 'styles/components/common/Active';
import {
  Container,
  FirstSection,
  MiddleSection,
  LastSection,
  Social,
  Copyright,
  SocialLink,
  StyledFooterInlineLink,
} from 'styles/components/common/Footer';

interface FooterLinkProps {
  href: string;
}

const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} passHref>
    <a>{children}</a>
  </Link>
);

const FooterInlineLink: FC<FooterLinkProps> = (props) => (
  <StyledFooterInlineLink>
    <FooterLink {...props} />
  </StyledFooterInlineLink>
);

const Footer: FC = () => (
  <Container>
    <FirstSection>
      <Logo styleMode="secondary" />
      <Social>
        <SocialLink href="/">
          <FacebookIcon />
        </SocialLink>
        <SocialLink href="/">
          <YouTubeIcon />
        </SocialLink>
        <SocialLink href="/">
          <TwitterIcon />
        </SocialLink>
        <SocialLink href="/">
          <PinterestIcon />
        </SocialLink>
        <SocialLink href="/">
          <InstagramIcon />
        </SocialLink>
      </Social>
    </FirstSection>

    <MiddleSection>
      <FooterInlineLink href="/">About Us</FooterInlineLink>
      <FooterInlineLink href="/">Careers</FooterInlineLink>
      <FooterInlineLink href="/">Contact</FooterInlineLink>
      <FooterInlineLink href="/">Support</FooterInlineLink>
      <FooterInlineLink href="/">Blog</FooterInlineLink>
      <FooterInlineLink href="/">Privacy Policy</FooterInlineLink>
    </MiddleSection>

    <LastSection>
      <Link href="/" passHref>
        <Anchor>Request Invite</Anchor>
      </Link>
      <Copyright>&copy; Easybank. All rights reserved</Copyright>
    </LastSection>
  </Container>
);

export default Footer;
