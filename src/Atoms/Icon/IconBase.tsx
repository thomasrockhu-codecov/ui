import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import * as R from 'ramda';
import { ColorFn, InternalProps, StyledIconBaseProps } from './IconBase.types';
import { assert } from '../../common/utils';

const ALLOWED_COLOR_STRINGS = ['transparent', 'inherit', 'currentColor'];
export const getColor: (
  theme: DefaultTheme,
  defaultColor: string,
  colorFnOrColor?: ColorFn | string,
) => string = (theme, defaultColor, colorFnOrColor) => {
  if (typeof colorFnOrColor !== 'undefined') {
    if (typeof colorFnOrColor === 'function') {
      return colorFnOrColor(theme) as string;
    }

    if (ALLOWED_COLOR_STRINGS.includes(colorFnOrColor)) {
      return colorFnOrColor;
    }
    assert(
      ALLOWED_COLOR_STRINGS.includes(colorFnOrColor),
      `Incorrect string value for color, use t => t.color.<some color> instead. Allowed string values are: ${ALLOWED_COLOR_STRINGS.join(
        ', ',
      )}.`,
    );
  }
  return defaultColor;
};

const CleanSvg = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} fill={props.fill} {...R.omit(['colorFn', 'inline'])(props)} />
));

const StyledIconBase = styled(CleanSvg)<StyledIconBaseProps>`
  ${(p) => {
    return `
      user-select: none;
      flex-shrink: 0;
      display: ${p.inline ? 'inline-block' : 'block'};
      ${p.inline ? 'vertical-align: middle;' : ''}
    `;
  }}
`;

export const IconBase: React.FC<InternalProps> = React.forwardRef<SVGSVGElement, InternalProps>(
  (props, ref) => {
    const { className, children, title, color, inline, ...rest } = props;

    return (
      <StyledIconBase
        className={className}
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        aria-hidden={title ? 'false' : 'true'}
        role={title ? 'img' : 'presentation'}
        colorFn={color}
        inline={inline}
        ref={ref}
        {...rest}
      >
        {children}
        {title ? <title>{title}</title> : null}
      </StyledIconBase>
    );
  },
);
