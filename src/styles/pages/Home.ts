import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  padding: 20rem 0;

  text-align: center;
  font-style: italic;

  position: relative;

  opacity: 0.5;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: calc((100% - 100vw) / 2);
    width: 100vw;
    height: 100%;
    z-index: -1;

    background-color: ${theme.colors.neutral.lightGrayishBlue};
  }
`;
