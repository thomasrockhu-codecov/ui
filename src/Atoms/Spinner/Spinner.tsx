import React, { useEffect, useState } from 'react';
import R from 'ramda';
import styled, { withTheme } from 'styled-components';
import { isArray, isString } from '../../common/utils';
import { Props, PropsWithTheme, ColorFn } from './Spinner.types';
import { Theme } from '../../theme/theme.types';

const getStrokeWidth = (spinnerWidth: number) =>
  // eslint-disable-next-line no-nested-ternary
  spinnerWidth >= 64 ? 3 : spinnerWidth >= 28 ? 4 : 5;

const StyledSvg = styled.svg`
  display: block;
  transform-origin: center;
  animation: rotate 2s linear infinite;

 & circle {
  fill: none;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
}`;

const evalColor = (theme: Theme, color?: ColorFn): string => {
  if (typeof color === 'function') {
    const usedColor = color(theme);

    if (isArray(usedColor)) {
      return R.head(usedColor) || theme.color.cta;
    }
    return isString(usedColor) ? usedColor : theme.color.cta;
  }

  return color || theme.color.cta;
};

const getDelay = (delay?: boolean | number) => {
  if (typeof delay === 'number') {
    return delay;
  }

  return delay === false ? 0 : 1000;
};

const RawSpinner: React.FC<PropsWithTheme> = ({ theme, size = 4, color, id }) => {
  const calculatedSize = theme.spacing.unit(size);
  const usedColor: string = evalColor(theme, color);

  return (
    <StyledSvg
      width={calculatedSize}
      height={calculatedSize}
      usedColor={usedColor}
      strokeWidth={getStrokeWidth(calculatedSize)}
      viewBox="25 25 50 50"
      id={id}
    >
      <circle stroke={usedColor} cx="50" cy="50" r="20"></circle>
    </StyledSvg>
  );
};

const TimeoutSpinner: React.FC<PropsWithTheme> = ({ delay, ...restProps }) => {
  const [spinning, setSpinning] = useState(false);
  const noDelay = delay === 0 || delay === false;
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinning(true);
    }, getDelay(delay));
    return () => clearTimeout(timer);
  }, []);

  if (noDelay || spinning) {
    return <RawSpinner {...restProps} />;
  }

  return null;
};

export const Spinner: React.FC<Props> = withTheme(TimeoutSpinner);

Spinner.displayName = 'Spinner';
