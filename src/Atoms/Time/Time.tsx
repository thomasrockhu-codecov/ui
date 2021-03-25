import { useIntl } from 'react-intl';
import React from 'react';
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

const Time: TimeComponent = ({ value, invalidValue = '-' }) => {
  const intl = useIntl();
  return isValidDateTimeNumber(value) ? (
    <time>{intl.formatTime(value, timeOptions)}</time>
  ) : (
    <>{invalidValue}</>
  );
};

export default Time;
