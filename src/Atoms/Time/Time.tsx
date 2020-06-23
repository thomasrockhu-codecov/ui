import { useIntl } from 'react-intl';
import React from 'react';
import { isValidDateTimeNumber } from '../../common/utils';
import { TimeComponent } from './Time.types';

const timeOptions = {
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
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
