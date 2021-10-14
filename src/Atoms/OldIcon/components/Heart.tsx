import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Heart = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <path d="M22.4067143,2.04269321 C25.0124153,1.78578799 27.5971255,2.69767428 29.4445457,4.52564162 C32.7829932,7.82948787 32.8505248,13.1283582 29.6465706,16.5129118 L29.4463225,16.7177042 L16.0082703,30 L2.57199485,16.7107043 C0.211987239,14.3963878 -0.606456205,10.961729 0.461771555,7.85499513 C1.52999931,4.74826127 4.29899077,2.51012842 7.60116565,2.0843336 C10.9033405,1.65853878 14.1640095,3.11918459 16.0082703,5.85037126 C17.4511242,3.69800422 19.8010134,2.29959843 22.4067143,2.04269321 Z M28.0378369,5.94732033 C26.614412,4.53888378 24.6176074,3.83441067 22.6029499,4.03304283 C20.6817629,4.22245941 18.9436883,5.21342003 17.8250766,6.74201287 L17.669536,6.96401214 L16.0143166,9.43317388 L14.3507727,6.96961286 C12.9310012,4.86705711 10.4116602,3.73849583 7.85693564,4.06791161 C5.30593794,4.39684682 3.17295084,6.12090722 2.35309085,8.50531147 C1.56535491,10.7962891 2.11914565,13.3201978 3.78836229,15.0947015 L3.97840955,15.2887346 L16.008,27.187 L28.039087,15.2965468 C30.5933538,12.767302 30.6521754,8.729086 28.2160863,6.13044918 L28.0378369,5.94732033 Z" />
    </IconBase>
  );
};

Heart.displayName = 'OldIcon.Heart';
