import { WindowSize } from 'hooks/useWindowSize';

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
