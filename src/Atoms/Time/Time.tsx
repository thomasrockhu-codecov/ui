import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import { isValidDateTimeNumber } from '../../common/utils';
import { TimeComponent } from './Time.types';

type FormatDateOptionHour12 = false;
type FormatDateOptionHour = 'numeric';
type FormatDateOptionMinute = 'numeric';
type FormatDateOptionSecond = 'numeric';

const timeOptions = {
  hour12: false as FormatDateOptionHour12,
  hour: 'numeric' as FormatDateOptionHour,
  minute: 'numeric' as FormatDateOptionMinute,
  second: 'numeric' as FormatDateOptionSecond,
};

const StyledSpan = styled.span`
  color: ${(p) => p.theme.color.text};
`;

const Time: TimeComponent = ({ value, invalidValue = '-' }) => {
  const intl = useIntl();
  return isValidDateTimeNumber(value) ? (
    <StyledSpan>
      <time>{intl.formatTime(value, timeOptions)}</time>
    </StyledSpan>
  ) : (
    <StyledSpan>{invalidValue}</StyledSpan>
  );
};

export default Time;
