import React, { FC, HTMLAttributes } from 'react';

import { Image } from 'components/common';
import {
  Container,
  CoverImageWrapper,
  Contents,
  CreatorAttribution,
  Title,
  BodySample,
} from 'styles/components/home/ArticleCard';

export interface ArticleDetails {
  imageSrc: string;
  creatorName: string;
  title: string;
  bodySample: string;
}

type Props = ArticleDetails & HTMLAttributes<HTMLDivElement>;

const ArticleCard: FC<Props> = ({
  imageSrc,
  creatorName,
  title,
  bodySample,
  ...rest
}) => (
  <Container {...rest}>
    <CoverImageWrapper>
      <Image src={imageSrc} layout="fill" objectFit="cover" />
    </CoverImageWrapper>
    <Contents>
      <CreatorAttribution>By {creatorName}</CreatorAttribution>
      <Title>{title}</Title>
      <BodySample>{bodySample}</BodySample>
    </Contents>
  </Container>
);

export default ArticleCard;
