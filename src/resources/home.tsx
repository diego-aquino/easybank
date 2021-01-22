import { WindowSize } from 'hooks/useWindowSize';
import { FeatureDetails } from 'components/home/Feature';
import { ApiIcon, BudgetingIcon, OnboardingIcon, OnlineIcon } from 'assets';

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
