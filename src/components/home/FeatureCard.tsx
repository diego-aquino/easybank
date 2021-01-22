import { FC, HTMLAttributes, ReactElement } from 'react';

import { Title, Description } from 'styles/components/home/FeatureCard';

export interface FeatureDetails extends HTMLAttributes<HTMLDivElement> {
  icon: ReactElement;
  title: string;
  description: string;
}

type Props = FeatureDetails;

const FeatureCard: FC<Props> = ({ icon, title, description, ...rest }) => (
  <div {...rest}>
    {icon}
    <Title>{title}</Title>
    <Description>{description}</Description>
  </div>
);

export default FeatureCard;
