import { FC, SVGAttributes } from 'react';

type Props = SVGAttributes<SVGSVGElement>;

const HamburgerIcon: FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="11"
    fill="currentColor"
    {...props}
  >
    <g fillRule="evenodd">
      <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
    </g>
  </svg>
);

export default HamburgerIcon;
