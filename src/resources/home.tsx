import { ApiIcon, BudgetingIcon, OnboardingIcon, OnlineIcon } from 'assets';
import { WindowSize } from 'hooks/useWindowSize';
import { FeatureDetails } from 'components/home/FeatureCard';
import { ArticleDetails } from 'components/home/ArticleCard';

const HERO_MOCKUPS_WIDTH_TO_HEIGHT_RATIO = 939 / 767;

type HeroSizeKeys =
  | 'getBackgroundWidth'
  | 'getBackgroundHeight'
  | 'getMockupsWidth'
  | 'getMockupsHeight';

type HeroSizeResource = {
  [key in HeroSizeKeys]: (isDesktop: boolean, windowSize: WindowSize) => number;
};

export const heroSize: HeroSizeResource = {
  getBackgroundWidth: (isDesktop, windowSize) =>
    isDesktop ? 1271 : windowSize.width,
  getBackgroundHeight: (isDesktop) => (isDesktop ? 1034 : 550),

  getMockupsWidth: (isDesktop, windowSize) =>
    isDesktop ? 767 : windowSize.width - 32,
  getMockupsHeight: (isDesktop, windowSize) =>
    isDesktop
      ? 939
      : HERO_MOCKUPS_WIDTH_TO_HEIGHT_RATIO * (windowSize.width - 32),
};

export const features: FeatureDetails[] = [
  {
    icon: <OnlineIcon />,
    title: 'Online Banking',
    description: `
      Our modern web and mobile applications allow you to keep track of your
      finances wherever you are in the world.
    `,
  },
  {
    icon: <BudgetingIcon />,
    title: 'Simple Budgeting',
    description: `    
      See exactly where your money goes each month. Receive notifications when
      you’re close to hitting your limits.
    `,
  },
  {
    icon: <OnboardingIcon />,
    title: 'Fast Onboarding',
    description: `
      We don’t do branches. Open your account in minutes online and start
      taking control of your finances right away.
    `,
  },
  {
    icon: <ApiIcon />,
    title: 'Open API',
    description: `
      Manage your savings, investments, pension, and much more from one account.
      Tracking your money has never been easier.
    `,
  },
];

type ArticleDetailsWithUrl = ArticleDetails & {
  url: string;
};

export const latestArticles: ArticleDetailsWithUrl[] = [
  {
    imageSrc: '/image-currency.jpg',
    creatorName: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    bodySample: `
      The world is getting smaller and we’re becoming more mobile. So why should
      you be forced to only receive money in a single...
    `,
    url: '/',
  },
  {
    imageSrc: '/image-restaurant.jpg',
    creatorName: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    bodySample: `
      Our simple budgeting feature allows you to separate out your spending and
      set realistic limits each month. That means you...
    `,
    url: '/',
  },
  {
    imageSrc: '/image-plane.jpg',
    creatorName: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    bodySample: `
      We want you to enjoy your travels. This is why we don’t charge any fees on
      purchases while you’re abroad. We’ll even show you...
    `,
    url: '/',
  },
  {
    imageSrc: '/image-confetti.jpg',
    creatorName: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    bodySample: `
      After a lot of hard work by the whole team, we’re excited to launch our
      closed beta. It’s easy to request an invite through the site...
    `,
    url: '/',
  },
];
