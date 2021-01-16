import styled from 'styled-components';

import theme from 'styles/theme';

const Button = styled.button`
  padding: 3rem 7.5rem;
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
    ::after {
      opacity: 0.2;
    }
  }
`;

export default Button;
