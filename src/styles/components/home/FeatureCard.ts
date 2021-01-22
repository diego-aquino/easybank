import styled from 'styled-components';

import theme from 'styles/theme';
import { toOpacity } from 'utils/styles';

export const Title = styled.h4`
  margin-top: 8rem;

  font-size: 5.8rem;
  font-weight: 400;
  color: ${toOpacity(theme.colors.primary.darkBlue, 0.9)};
`;

export const Description = styled.p`
  width: 100%;
  margin-top: 5.5rem;

  color: ${toOpacity(theme.colors.primary.darkBlue, 0.6)};
  line-height: 6.75rem;
  font-size: 3.8rem;
`;
