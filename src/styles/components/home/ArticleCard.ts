import styled from 'styled-components';
import theme from 'styles/theme';
import { toOpacity } from 'utils/styles';

export const Container = styled.article`
  border-radius: 1.2rem;
  height: 100%;

  background-color: ${theme.colors.neutral.lightGrayishBlue};
`;

export const CoverImageWrapper = styled.div`
  width: 100%;
  height: 45rem;

  position: relative;

  img {
    border-radius: 1.2rem 1.2rem 0 0;
  }
`;

export const Contents = styled.div`
  padding: 4.5rem;
`;

export const CreatorAttribution = styled.p`
  color: ${toOpacity(theme.colors.primary.darkBlue, 0.7)};
  font-size: 3rem;
`;

export const Title = styled.h5`
  margin-top: 3rem;

  color: ${theme.colors.primary.darkBlue};
  font-size: 4.7rem;
  font-weight: 400;
`;

export const BodySample = styled.p`
  margin-top: 3rem;

  color: ${toOpacity(theme.colors.primary.darkBlue, 0.75)};
  font-size: 3.4rem;
  font-weight: 400;
`;
