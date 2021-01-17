import styled from 'styled-components';

import theme from 'styles/theme';

export const Container = styled.header`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
    flex-shrink: 0;
  }
`;

export const LogoContainer = styled.a`
  padding: 1rem;
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    align-items: center;

    list-style: none;
  }
`;

export const NavbarLi = styled.li`
  display: flex;

  padding: 0 3rem;

  a {
    padding: 8rem 1rem;

    color: ${theme.colors.neutral.grayishBlue};
    text-decoration: none;

    position: relative;

    ::after {
      content: '';
      width: 0;
      height: 1rem;
      margin: 0 auto;

      position: absolute;
      bottom: 0;
      left: 0;

      opacity: 0;
      transition: opacity ${theme.transitions.regular},
        width ${theme.transitions.regular};

      background: ${theme.gradients.primary};
    }

    :hover {
      cursor: pointer;
      color: ${theme.colors.primary.darkBlue};

      ::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;
