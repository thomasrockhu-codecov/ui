import React from 'react';
import { useIntl } from 'react-intl';
import { DateTimeComponent } from './DateTime.types';
import { isValidDateTimeNumber } from '../../common/utils';

type FormatDateOptionYear = 'numeric';
type FormatDateOptionMonth = 'numeric';
type FormatDateOptionDay = 'numeric';

const dateTimeOptions = {
  year: 'numeric' as FormatDateOptionYear,
  month: 'numeric' as FormatDateOptionMonth,
  day: 'numeric' as FormatDateOptionDay,
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
};

const dateOptions = {
  year: 'numeric' as FormatDateOptionYear,
  month: 'numeric' as FormatDateOptionMonth,
  day: 'numeric' as FormatDateOptionDay,
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
