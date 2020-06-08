import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const House = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <g fillRule="evenodd">
        <path fillRule="nonzero" d="M29 13l-26 .737781V32h26V13.737781 13zm-3 3v13H6V16h20z" />
        <path d="M9.49396713 23.1778601h4v8h-4zM19.4939671 19.1778601h3v7h-3z" />
        <path
          fillRule="nonzero"
          d="M31.4939671 16.1778601l-15.5-15.99999996L.49396713 16.1778601H31.4939671zM15.9938806 5.1l7.999742 8h-16l8.000258-8z"
        />
        <path fillRule="nonzero" d="M29 4v10h-3.1818182V6.00009139h-2.6363636v1.81329413H20V4z" />
      </g>
    </IconBase>
  );
};

House.displayName = 'Icon.House';
