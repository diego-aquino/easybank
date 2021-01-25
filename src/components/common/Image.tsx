import { FC, SyntheticEvent, useCallback, useState } from 'react';
import { ImageProps as NextImageProps } from 'next/image';

import { StyledNextImage } from 'styles/components/common/Image';

type Props = NextImageProps;

const Image: FC<Props> = ({ onLoad, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = useCallback(
    (event: SyntheticEvent<HTMLImageElement>) => {
      setIsLoaded(true);
      onLoad?.(event);
    },
    [onLoad],
  );

  return (
    <StyledNextImage $visible={isLoaded} onLoad={handleImageLoad} {...rest} />
  );
};

export default Image;
