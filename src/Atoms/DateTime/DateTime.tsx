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

const DateTime: DateTimeComponent = ({ value, onlyDate, invalidValue = '-' }) => {
  const intl = useIntl();
  if (isValidDateTimeNumber(value)) {
    const options = onlyDate ? dateOptions : dateTimeOptions;

    return <time>{intl!.formatDate(value, options)}</time>;
  }

  return <>{invalidValue}</>;
};

export default DateTime;
