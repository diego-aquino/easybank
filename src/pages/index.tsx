import { FC, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useWindowSize } from 'hooks';
import { WindowSize } from 'hooks/useWindowSize';
import { Section } from 'components/home';
import { Title, Description } from 'styles/components/home/Section';
import { Layout, Hero, HeroContent, HeroImages } from 'styles/pages/Home';
import { Anchor } from 'styles/components/common/Active';

const HERO_MOCKUPS_WIDTH_TO_HEIGHT_RATIO = 939 / 767;

type ImageSizeHelper = (isDesktop: boolean, windowSize: WindowSize) => number;
const getHeroBackgroundWidth: ImageSizeHelper = (isDesktop, windowSize) =>
  isDesktop ? 1271 : windowSize.width;
const getHeroBackgroundHeight: ImageSizeHelper = (isDesktop) =>
  isDesktop ? 1034 : 550;
const getHeroMockupsWidth: ImageSizeHelper = (isDesktop, windowSize) =>
  isDesktop ? 767 : windowSize.width - 32;
const getHeroMockupsHeight: ImageSizeHelper = (isDesktop, windowSize) =>
  isDesktop
    ? 939
    : HERO_MOCKUPS_WIDTH_TO_HEIGHT_RATIO * (windowSize.width - 32);

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
            width={getHeroBackgroundWidth(isDesktopLayout, windowSize)}
            height={getHeroBackgroundHeight(isDesktopLayout, windowSize)}
            objectFit="cover"
            alt=""
          />
          <Image
            src="/hero-mockups.png"
            layout="fixed"
            width={getHeroMockupsWidth(isDesktopLayout, windowSize)}
            height={getHeroMockupsHeight(isDesktopLayout, windowSize)}
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
