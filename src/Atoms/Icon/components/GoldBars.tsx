import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const GoldBars = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 72 72">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect fill="#01424C" x="0" y="0" width="72" height="72" rx="36"></rect>
        <path
          d="M44.8149217,28 L48.101,39 L56.3149217,39 L60.4962708,52.995341 L34.5,53 L34.5,52.996 L11.5,53 L15.6882935,39.0061674 L15.6850783,39 L23.897,39 L27.1882935,28.0061674 L27.1850783,28 L44.8149217,28 Z M31.074,42 L17.923,42 L15.53,50 L33.468,50 L31.074,42 Z M54.074,42 L40.923,42 L38.53,50 L56.468,50 L54.074,42 Z M37.793,41.997 L34.21,41.998 L36,47.987 L37.793,41.997 Z M42.574,31 L29.423,31 L27.03,39 L44.968,39 L42.574,31 Z M21.9407317,18 L28.1718908,23.017236 L26.2904273,25.3539206 L20.0592683,20.3366846 L21.9407317,18 Z M50.0592683,18 L51.9407317,20.3366846 L45.7095727,25.3539206 L43.8281092,23.017236 L50.0592683,18 Z M37.5,15 L37.5,23 L34.5,23 L34.5,15 L37.5,15 Z"
          fill="#00F0E1"
        />
      </g>
    </IconBase>
  );
};

GoldBars.displayName = 'Icon.GoldBars';
