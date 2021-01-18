import { FC, SVGAttributes } from 'react';

type Props = SVGAttributes<SVGSVGElement>;

const CloseIcon: FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    fill="currentColor"
    {...props}
  >
    <g fillRule="evenodd">
      <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
      <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
    </g>
  </svg>
);

export default CloseIcon;
