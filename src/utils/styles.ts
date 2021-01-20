import { css } from 'styled-components';
import { StyledComponentsCSS } from 'typings';

function expandHexColorCode(hexColorCode: string): string {
  const [red, green, blue] = Array.from(hexColorCode);
  const expandedHexColorCode = [red, green, blue]
    .map((value) => value.repeat(2))
    .join('');

  return expandedHexColorCode;
}

export function toOpacity(hexColor: string, alpha = 1): string {
  const isShortRGB = hexColor.length === 3;
  const expandedRGBColor = isShortRGB ? expandHexColorCode(hexColor) : hexColor;

  const alphaInHexadecimal = Math.floor(255 * alpha).toString(16);
  const shouldHaveLeadingZero = alphaInHexadecimal.length === 1;
  const formattedHexAlpha =
    (shouldHaveLeadingZero ? '0' : '') + alphaInHexadecimal;

  return expandedRGBColor + formattedHexAlpha;
}

interface ScreenWidthBackgroundOptions {
  excludeParentStyles: boolean;
}

export function getScreenWideBackground(
  backgroundValue: string,
  options?: ScreenWidthBackgroundOptions,
): StyledComponentsCSS {
  const { excludeParentStyles = false } = options || {};

  return css`
    ${!excludeParentStyles &&
    css`
      position: relative;
    `}

    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 100vw;
      height: 100%;
      transform: translateX(-50%);
      z-index: -1;

      background: ${backgroundValue};
    }
  `;
}
