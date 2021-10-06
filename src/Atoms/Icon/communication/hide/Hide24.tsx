import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Hide24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.41 22L22 3.41 20.59 2l-3.365 3.365C15.7 4.55 13.948 4 12 4 4.582 4 0 12 0 12s1.828 3.192 5.045 5.544l-3.05 3.05L3.41 22zm3.068-5.89c-.676-.471-1.302-1-1.871-1.55a19.165 19.165 0 01-2.158-2.486L2.396 12l.053-.074A19.163 19.163 0 014.607 9.44C6.507 7.606 9.032 6 12 6c1.34 0 2.59.328 3.734.856l-1.7 1.7a4 4 0 00-5.48 5.479L6.479 16.11zm3.59-3.59l2.453-2.451a2.002 2.002 0 00-2.453 2.452z"
        fill={iconColor}
      />
      <path
        d="M10.54 17.87A8.3 8.3 0 0012 18c2.968 0 5.493-1.606 7.393-3.44a19.16 19.16 0 002.158-2.486l.053-.074-.053-.074a19.158 19.158 0 00-2.375-2.692l1.415-1.415C22.784 9.877 24 12 24 12s-4.582 8-12 8c-1.102 0-2.142-.177-3.113-.477l1.653-1.653z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Hide24;
