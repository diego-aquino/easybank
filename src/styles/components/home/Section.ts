import styled, { css } from 'styled-components';
import theme from 'styles/theme';

import { StyledComponentsCSS } from 'typings';
import { toOpacity } from 'utils/colors';

export type BackgroundMode = 'light' | 'dark';

const backgroundStyles: { [key in BackgroundMode]: StyledComponentsCSS } = {
  light: css`
    ::after {
      background-color: ${theme.colors.neutral.white};
    }
  `,
  dark: css`
    ::after {
      background-color: ${theme.colors.neutral.lightGrayishBlue};
    }
  `,
};

interface ContainerProps {
  backgroundMode: BackgroundMode;
}

export const Container = styled.section<ContainerProps>`
  max-width: calc(1024px + 16rem);
  margin: 0 auto;
  padding: 22rem 8rem;

  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: calc((100% - 100vw) / 2);
    width: 100vw;
    height: 100%;
    z-index: -1;
  }

  ${({ backgroundMode }) => backgroundStyles[backgroundMode]};
`;

export const Title = styled.h1`
  margin-bottom: 7rem;

  font-size: 9.5rem;
  font-weight: 300;
  font-style: normal;
  color: ${theme.colors.primary.darkBlue};
`;

export const Description = styled.p`
  color: ${toOpacity(theme.colors.primary.darkBlue, 0.65)};
  line-height: 6.75rem;
  font-size: 4.5rem;
`;
