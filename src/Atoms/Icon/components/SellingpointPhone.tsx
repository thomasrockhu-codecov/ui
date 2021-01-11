import React from 'react';
import styled from 'styled-components';
import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const fillColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `fill: ${fillColor};`;
  }}
`;

export const SellingpointPhone = ({ fill, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <StyledPath
        d="M6.708 1.545L10.862 5.7l-2.41 3.664 6.291 6.291 3.797-2.278 3.994 3.995-4.078 5.216-.59-.007c-4.12-.044-7.472-1.67-11.022-5.385-3.738-3.912-5.22-7.284-5-11.405l.03-.55 4.834-3.696zM6.54 4.077L3.738 6.218l-.005.424c.018 3.083 1.23 5.715 4.135 8.856l.357.38c3.016 3.156 5.708 4.546 8.888 4.764l.424.021 2.452-3.137-1.746-1.745-3.796 2.279-8.445-8.445 2.41-3.666L6.54 4.077z"
        strokeColorFn={fill || (() => '#28282A')}
        fillRule="nonzero"
      />
    </IconBase>
  );
};

SellingpointPhone.displayName = 'Icon.SellingpointPhone';
