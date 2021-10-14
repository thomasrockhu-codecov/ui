import React from 'react';
import styled from 'styled-components';
import { getColor, IconBase } from '../IconBase';
import { StyledChildProps, WithBackgroundColor } from '../IconBase.types';

const Circle = styled.circle<StyledChildProps>`
  ${(p) => {
    const backgroundColor = getColor(p.theme, p.theme.color.bulbBackground, p.backgroundColorFn);
    return `fill: ${backgroundColor};`;
  }}
`;

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const fillColor = getColor(p.theme, p.theme.color.bulbForeground);
    return `fill: ${fillColor};`;
  }}
`;

export const BulbInCircle = (props: WithBackgroundColor) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <Circle backgroundColorFn={props.backgroundColor} cx="16" cy="16" r="16" />
      <StyledPath d="M15.6764562,10.3037862 C17.1392622,10.2182628 18.5802352,10.6886414 19.6937143,11.6507795 C19.9120436,11.8218263 20.1085399,12.0356347 20.2613704,12.2494432 C21.1788494,13.3359789 21.6375889,14.7083951 21.5153216,16.1272205 L21.5058471,16.2262806 C21.3748495,17.6801782 20.654363,18.9844098 19.5190509,19.9037862 C19.142433,20.2111359 18.9262264,20.6559391 18.908863,21.1252877 L18.9077291,21.186637 L18.9077291,24.8 L13.1001712,24.8 L13.1001712,21.1224944 C13.1001712,20.630735 12.860009,20.1603563 12.4670163,19.8396437 C11.0260433,18.685078 10.2837239,16.9104677 10.5020531,15.1144766 C10.6330507,14.0026726 11.113375,12.976392 11.8556945,12.142539 C12.8381761,11.0521158 14.1918174,10.3893096 15.6764562,10.3037862 Z M17.6414194,21.8494432 L14.3883137,21.8494432 L14.3883137,23.5385301 L17.6414194,23.5385301 L17.6414194,21.8494432 Z M16.5061074,11.586637 C14.1699844,11.3300668 12.0521908,12.9550111 11.7901957,15.2427617 C11.6155323,16.6111359 12.1831883,17.97951 13.2748345,18.8561247 C13.7996645,19.2672948 14.1630082,19.8563751 14.3066377,20.5093206 L14.3228149,20.5879733 L15.3489624,20.5879733 L17.7069182,20.5665924 C17.8324575,19.9518931 18.158511,19.3961024 18.6274309,18.9744927 L18.6893998,18.9202673 L18.7112327,18.9202673 C19.5627168,18.2360802 20.1085399,17.2739421 20.2395374,16.1835189 C20.370535,15.0930958 20.0430411,14.0026726 19.3443875,13.1260579 C18.645734,12.2708241 17.6414194,11.714922 16.5061074,11.586637 Z M8.91084559,7.71670379 L11.5353159,10.2868312 L10.6244703,11.1788166 L8,8.60868918 L8.91084559,7.71670379 Z M23.0892832,7.71670379 L24,8.60881532 L21.3751333,11.1786039 L20.4644166,10.2864923 L23.0892832,7.71670379 Z M16.6436548,5.6 L16.6436548,9.23474388 L15.3555122,9.23474388 L15.3555122,5.6 L16.6436548,5.6 Z" />
    </IconBase>
  );
};

BulbInCircle.displayName = 'OldIcon.BulbInCircle';
