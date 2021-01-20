import React, { FC, HTMLAttributes } from 'react';

import {
  BackgroundMode,
  Container,
  Title,
} from 'styles/components/home/Section';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  backgroundMode?: BackgroundMode;
}

const Section: FC<Props> = ({
  title,
  backgroundMode = 'light',
  children,
  ...rest
}) => (
  <Container backgroundMode={backgroundMode} {...rest}>
    {title && <Title>{title}</Title>}
    {children}
  </Container>
);

export default Section;
