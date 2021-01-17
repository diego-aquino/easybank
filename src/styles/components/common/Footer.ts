import styled, { css } from 'styled-components';

// work around: styled-components won't recognize ExternalLink if we import it from 'components/common'
import ExternalLink from 'components/common/ExternalLink';
import theme from 'styles/theme';

export const Container = styled.footer`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 11rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  ::after {
    content: '';
    width: 100vw;
    height: 100%;

    position: absolute;
    bottom: 0;
    left: calc((100% - 100vw) / 2);
    z-index: -1;

    background-color: ${theme.colors.primary.darkBlue};
  }
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MiddleSection = styled.div`
  margin-left: 30rem;

  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 38rem);
  gap: 3.5rem 5rem;

  font-size: 3.5rem;
`;

export const LastSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  flex-shrink: 0;
`;

const footerAnchorStyles = css`
  color: ${theme.colors.neutral.lightestGray};
  transition: color ${theme.transitions.fast};

  :hover {
    color: ${theme.colors.primary.limeGreen};
    cursor: pointer;
  }
`;

export const SocialLink = styled(ExternalLink)`
  ${footerAnchorStyles}

  svg {
    color: inherit;
  }
`;

export const Social = styled.div`
  margin-top: 10rem;

  display: flex;
  align-items: center;

  ${SocialLink} + ${SocialLink} {
    margin-left: 3.2rem;
  }
`;

export const StyledFooterInlineLink = styled.div`
  width: fit-content;

  a {
    ${footerAnchorStyles}
    padding: 1rem;
    text-decoration: none;
  }
`;

export const Copyright = styled.div`
  margin-top: 6rem;
  font-size: 3.5rem;
  color: ${theme.colors.neutral.grayishBlue};
`;
