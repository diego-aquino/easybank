import styled from 'styled-components';

import { Layout as RawLayout } from 'components/common';
import { Container as Header } from 'styles/components/common/Header';
import { Section } from 'components/home';
import { Title, Description } from 'styles/components/home/Section';

export const Layout = styled(RawLayout)`
  width: 100%;
  min-width: 230px;
  overflow-x: hidden;

  ${Header} {
    z-index: 1;
  }
`;

export const Hero = styled(Section)`
  position: relative;

  padding-bottom: 125.5rem;
  margin-bottom: -80rem;

  ${Title} {
    font-size: 14rem;
  }

  ${Description} {
    margin-bottom: 9rem;
  }

  @media (max-width: 768px) {
    padding-top: 80rem;

    ${Title} {
      font-size: 12.5rem;
    }
  }
`;

export const HeroContent = styled.div`
  max-width: 115rem;
  margin-top: 15rem;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
  }
`;

export const HeroImages = styled.div`
  width: fit-content;
  position: absolute;
  top: 0;
  left: 45%;

  > :nth-child(1) {
    position: absolute;
    top: -65rem;
    left: 0;
  }

  > :nth-child(2) {
    position: absolute !important;
    top: -30rem;
    left: 45rem;
  }

  @media (max-width: 1024px) {
    left: 50%;
  }

  @media (max-width: 940px) {
    left: 55%;
  }

  @media (max-width: 850px) {
    left: 60%;
  }

  @media (max-width: 768px) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    > *:nth-child(1) {
      position: absolute;
      top: unset;
      bottom: 50rem;
      left: 0;
    }

    > :nth-child(2) {
      position: absolute !important;
      top: unset;
      bottom: 60rem;
      left: 4rem;
    }
  }

  @media (max-width: 628px) {
    > *:nth-child(1) {
      bottom: 40rem;
    }
  }

  @media (max-width: 540px) {
    > *:nth-child(1) {
      bottom: 30rem;
    }
  }
`;
