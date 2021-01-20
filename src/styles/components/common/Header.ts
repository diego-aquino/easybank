import { CloseIcon } from 'assets';
import styled, { css } from 'styled-components';

import theme from 'styles/theme';
import { getScreenWideBackground, toOpacity } from 'utils/styles';
import { Anchor } from './Active';

export const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 21rem;
  padding: 0 8rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${getScreenWideBackground(theme.colors.neutral.white)}

  @media (max-width: 768px) {
    height: 16rem;
    padding: 0 4rem;
  }
`;

export const LogoContainer = styled.a`
  padding: 1rem;
`;

export const NavbarLinkUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 70rem;
    border-radius: 1rem;
    padding: 6rem;

    flex-direction: column;
    justify-content: center;

    position: absolute;
    top: 20rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;

    background-color: ${theme.colors.neutral.white};
  }
`;

interface NavbarProps {
  modalActive: boolean;
}

export const Navbar = styled.nav<NavbarProps>`
  @media (max-width: 768px) {
    ::after {
      content: '';
      width: 100vw;
      height: calc(100vh - 16rem);

      position: absolute;
      top: 16rem;
      left: -4rem;
      z-index: 1;

      display: ${({ modalActive }) => (modalActive ? 'block' : 'none')};

      background-color: ${toOpacity(theme.colors.primary.darkBlue, 0.5)};
      background: linear-gradient(
        180deg,
        ${toOpacity(theme.colors.primary.darkBlue, 0.65)},
        transparent
      );
    }

    ${NavbarLinkUl} {
      ${({ modalActive }) =>
        !modalActive &&
        css`
          display: none;
        `}
    }
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
  }

  a::after {
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

  a:hover {
    cursor: pointer;
    color: ${theme.colors.primary.darkBlue};
  }

  a:hover::after {
    width: 100%;
    opacity: 1;
  }

  @media (max-width: 1024px) {
    padding: 0 2rem;

    a {
      padding: 8rem 0.5rem;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 3rem 0.5rem;
      color: ${theme.colors.primary.darkBlue};
    }
  }
`;

export const RequestInviteAnchor = styled(Anchor)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ToggleNavbarModalButton = styled.button`
  padding: 2rem;
  border: 0;

  display: none;
  background-color: transparent;

  transition: color ${theme.transitions.regular};

  :hover {
    cursor: pointer;
    color: ${theme.colors.primary.limeGreen};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  height: 4rem;
  width: 4rem;
`;
