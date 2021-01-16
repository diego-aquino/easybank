import styled from 'styled-components';

import theme from 'styles/theme';

const Button = styled.button`
  padding: 3.5rem 7.5rem;
  border-radius: 20rem;

  font-weight: 700;
  font-size: 3.5rem;
  color: ${theme.colors.neutral.white};
  text-decoration: none;

  background-color: ${theme.colors.primary.brightCyan};
  background: ${theme.gradients.primary};

  transition: opacity ${theme.transitions.fast};

  :hover {
    opacity: 0.75;
  }
`;

export default Button;
