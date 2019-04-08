import React from 'react';

export default function FlagSe({ ...rest }) {
  return (
    <svg focusable="false" {...rest}>
      <g transform="translate(50.082) scale(.9375)">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#006aa7" d="M-121.103.302h256V205.1h-256zM-121.103 307.178h256v204.8h-256z" />
          <path fill="#fecc00" d="M-121.103 204.984h256v102.4h-256z" />
          <path fill="#fecc00" d="M133.843.01h102.4v511.997h-102.4z" />
          <path fill="#fecc00" d="M232.995 205.013h460.798v102.4H232.995z" />
          <path
            fill="#006aa7"
            d="M236.155 307.208h460.797v204.799H236.155zM236.155.302h460.797V205.1H236.155z"
          />
        </g>
      </g>
      <title>Sweden</title>
    </svg>
  );
}

FlagSe.defaultProps = {
  viewBox: '0 0 640 480',
};
