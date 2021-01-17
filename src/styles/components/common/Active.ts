import styled, { css } from 'styled-components';

import theme from 'styles/theme';

const activeElementStyles = css`
  padding: 3rem 7.5rem;
  border: none;
  border-radius: 20rem;

  position: relative;

  font-weight: 700;
  font-size: 3.5rem;
  color: ${theme.colors.neutral.white};
  text-decoration: none;

  background-color: ${theme.colors.primary.brightCyan};
  background: ${theme.gradients.primary};

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;
    background-color: ${theme.colors.neutral.lightGrayishBlue};

    transition: opacity ${theme.transitions.fast};
  }

  :hover {
    cursor: pointer;

    ::after {
      opacity: 0.2;
    }
  }
`;

export const Button = styled.button`
  ${activeElementStyles}
`;

export const Anchor = styled.a`
  ${activeElementStyles}
`;
