import React from 'react';
import styled from 'styled-components';
import { getColor, IconBase } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.text, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const UrgentMessage = ({ fill, stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 89 65">
      <g fill="none" fillRule="evenodd" clipRule="evenodd">
        <StyledPath
          strokeColorFn={fill || ((t) => getColor(t, t.color.text))}
          d="M.625 11.75H55v3.75H7.601L40 43.04l17.927-15.238 2.66 2.66-8.606 7.315L75.625 58.27V34.25h3.75v30H.625v-52.5zm3.75 46.519l23.644-20.492L4.375 17.68v40.589zM30.91 40.234L7.526 60.5h64.948L49.09 40.234 40 47.961l-9.09-7.727z"
        />
        <StyledPath
          strokeColorFn={stroke || ((t) => getColor(t, t.color.negative))}
          d="M80.152.5H67.348L58.75 9.098v12.804l8.598 8.598h12.804l8.598-8.598V9.098L80.152.5zM71.875 8v9.375h3.75V8h-3.75zm0 15v-3.75h3.75V23h-3.75z"
        />
      </g>
    </IconBase>
  );
};

UrgentMessage.displayName = 'OldIcon.UrgentMessage';
