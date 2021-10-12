import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Lightbulb64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path d="M33 10V4H31V10H33Z" fill="currentColor" />
      <path
        d="M47.8787 16.1214L52.1213 11.8787L50.7071 10.4645L46.4645 14.7072L47.8787 16.1214Z"
        fill="currentColor"
      />
      <path
        d="M16.1213 16.1214L11.8787 11.8788L13.2929 10.4645L17.5355 14.7072L16.1213 16.1214Z"
        fill="currentColor"
      />
      <path d="M24 52V54H40V52H24Z" fill="currentColor" />
      <path d="M40 56V58H24V56H40Z" fill="currentColor" />
      <path
        d="M24 50H26V41.6527C21.2701 39.4058 18 34.5848 18 29C18 21.268 24.268 15 32 15C39.732 15 46 21.268 46 29C46 34.5848 42.7299 39.4058 38 41.6527V50H40V42.8595C44.7824 40.093 48 34.9223 48 29C48 20.1634 40.8366 13 32 13C23.1634 13 16 20.1634 16 29C16 34.9223 19.2176 40.093 24 42.8595V50Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 35V37H33V35H33.0354C33.2781 33.3039 34.7368 32 36.5 32C38.433 32 40 33.567 40 35.5C40 37.2632 38.6961 38.7219 37 38.9646V39H35V50H33V39H31V50H29V39H27V38.9646C25.3039 38.7219 24 37.2632 24 35.5C24 33.567 25.567 32 27.5 32C29.2632 32 30.7219 33.3039 30.9646 35H31ZM35 37V35.5C35 34.6716 35.6716 34 36.5 34C37.3284 34 38 34.6716 38 35.5C38 36.3284 37.3284 37 36.5 37H35ZM29 35.5C29 34.6716 28.3284 34 27.5 34C26.6716 34 26 34.6716 26 35.5C26 36.3284 26.6716 37 27.5 37H29V35.5Z"
        fill="currentColor"
      />
      <path d="M57 30H51V28H57V30Z" fill="currentColor" />
      <path d="M13 30H7V28H13V30Z" fill="currentColor" />
      <path
        d="M35 21C37.7614 21 40 23.2386 40 26H42C42 22.134 38.866 19 35 19V21Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Lightbulb64;
