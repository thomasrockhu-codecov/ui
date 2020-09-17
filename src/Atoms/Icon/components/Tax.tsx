import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Tax = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 68 76">
      <g fill="none" fillRule="evenodd">
        <path
          fill="#282823"
          fillRule="nonzero"
          d="M50.584 65.657v3.788a3.788 3.788 0 01-7.576 0v-5.05H11.443V6.312a3.788 3.788 0 013.787-3.788h36.617a6.213 6.213 0 00-1.263 3.788v24.354h2.525V16.414H63.21V6.313A6.313 6.313 0 0056.897 0H15.23a6.313 6.313 0 00-6.313 6.313v58.081H.08v5.051a6.313 6.313 0 006.313 6.313h40.404a6.313 6.313 0 006.313-6.313v-3.788h-2.525zM60.685 6.313v7.576H53.11V6.313a3.788 3.788 0 017.576 0zM6.392 73.233a3.788 3.788 0 01-3.788-3.788v-2.526h37.88v2.526c0 1.366.442 2.694 1.262 3.788H6.392z"
        />
        <g transform="translate(39.69 34.65)">
          <text
            fill="#282823"
            fontFamily="NordnetSansMono-Bold, Nordnet Sans Mono"
            fontSize="21.42"
            fontWeight="bold"
          >
            <tspan x="6.615" y="20.788">
              €
            </tspan>
          </text>
          <circle cx="13.466" cy="13.466" r="13.466" stroke="#282823" strokeWidth="2.362" />
        </g>
        <text
          fill="#282823"
          fontFamily="NordnetSansMono-Bold, Nordnet Sans Mono"
          fontSize="14.805"
          fontWeight="bold"
        >
          <tspan x="16.223" y="20.615">
            TAX
          </tspan>
        </text>
        <g stroke="#282823" strokeLinecap="square" strokeWidth="2">
          <path d="M18 26h25M19 30h24M31 34h12M22 34h5" />
        </g>
      </g>
    </IconBase>
  );
};

Tax.displayName = 'Icon.Tax';
