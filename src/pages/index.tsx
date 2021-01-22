import { FC, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { heroSize } from 'resources/home';
import { useWindowSize } from 'hooks';
import { Section } from 'components/home';
import { Title, Description } from 'styles/components/home/Section';
import { Anchor } from 'styles/components/common/Active';
import { Layout, Hero, HeroContent, HeroImages } from 'styles/pages/Home';

const Home: FC = () => {
  const windowSize = useWindowSize();
  const isDesktopLayout = useMemo(() => windowSize.width > 768, [windowSize]);

  return (
    <Layout pageTitle="Home | Easybank">
      <Hero>
        <HeroContent>
          <Title>Next generation digital banking</Title>
          <Description>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Description>
          <Link href="/" passHref>
            <Anchor>Request Invite</Anchor>
          </Link>
        </HeroContent>

        <HeroImages>
          <Image
            src={
              isDesktopLayout
                ? '/hero-background-desktop.svg'
                : '/hero-background-mobile.svg'
            }
            layout="fixed"
            width={heroSize.getBackgroundWidth(isDesktopLayout, windowSize)}
            height={heroSize.getBackgroundHeight(isDesktopLayout, windowSize)}
            objectFit="cover"
            alt=""
          />
          <Image
            src="/hero-mockups.png"
            layout="fixed"
            width={heroSize.getMockupsWidth(isDesktopLayout, windowSize)}
            height={heroSize.getMockupsHeight(isDesktopLayout, windowSize)}
            objectFit="scale-down"
            alt=""
          />
        </HeroImages>
      </Hero>

      <Section title="Why choose Easybank?" backgroundMode="dark">
        <Description>
          We leverage Open Banking to turn your bank account into your financial
          hub.
          <br />
          Control your finances like never before.
        </Description>
      </Section>
    </Layout>
  );
};

export default Home;
