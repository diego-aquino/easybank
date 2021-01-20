import styled, { css } from 'styled-components';
import theme from 'styles/theme';

import { StyledComponentsCSS } from 'typings';
import { getScreenWideBackground, toOpacity } from 'utils/styles';

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
  padding: 22rem 12rem;

  ${getScreenWideBackground('none')}
  ${({ backgroundMode }) => backgroundStyles[backgroundMode]};

  @media (max-width: 768px) {
    padding: 16rem 8rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 7rem;

  font-size: 9.5rem;
  font-weight: 300;
  font-style: normal;
  color: ${theme.colors.primary.darkBlue};
`;

export const Description = styled.p`
  width: 100%;
  color: ${toOpacity(theme.colors.primary.darkBlue, 0.65)};
  line-height: 6.75rem;
  font-size: 4.5rem;
`;
