import styled from 'styled-components';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import theme from 'styles/theme';

type StyledNextImageProps = NextImageProps & {
  $visible?: boolean;
};

export const StyledNextImage = styled(NextImage)<StyledNextImageProps>`
  opacity: ${({ $visible = true }) => ($visible ? 1 : 0)};
  transition: opacity ${theme.transitions.regular};
`;
