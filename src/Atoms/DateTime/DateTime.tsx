import { useIntl } from 'react-intl';
import React from 'react';
import { DateTimeComponent } from './DateTime.types';
import { isValidDateTimeNumber } from '../../common/utils';

const dateTimeOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
};

const dateOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

const DateTime: DateTimeComponent = ({ value, onlyDate, options, invalidValue = '-' }) => {
  const intl = useIntl();
  if (isValidDateTimeNumber(value)) {
    const formatOptions = options || (onlyDate ? dateOptions : dateTimeOptions);

    return <time>{intl!.formatDate(value, formatOptions)}</time>;
  }

  return <>{invalidValue}</>;
};

export default DateTime;
