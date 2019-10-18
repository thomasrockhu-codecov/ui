import { injectIntl } from 'react-intl';
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

const DateTime: DateTimeComponent = ({ intl, value, onlyDate, invalidValue = '-' }) => {
  if (isValidDateTimeNumber(value)) {
    const options = onlyDate ? dateOptions : dateTimeOptions;

    return <time>{intl!.formatDate(value, options)}</time>;
  }

  return <>{invalidValue}</>;
};

const Injected = (injectIntl(DateTime as any) as any) as DateTimeComponent;
export default Injected;
