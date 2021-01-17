import { AnchorHTMLAttributes, FC } from 'react';

import { ExcludeProperties } from 'typings';

type Props = ExcludeProperties<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'target' | 'rel'
>;

const ExternalLink: FC<Props> = ({ children, ...rest }) => (
  <a target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);

export default ExternalLink;
