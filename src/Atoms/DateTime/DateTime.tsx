import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
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

const StyledSpan = styled.span`
  color: ${(p) => p.theme.color.text};
`;

const DateTime: DateTimeComponent = ({ value, onlyDate, options, invalidValue = '-' }) => {
  const intl = useIntl();
  if (isValidDateTimeNumber(value)) {
    const formatOptions = options || (onlyDate ? dateOptions : dateTimeOptions);

    return (
      <StyledSpan>
        <time>{intl!.formatDate(value, formatOptions)}</time>
      </StyledSpan>
    );
  }

  return <StyledSpan>{invalidValue}</StyledSpan>;
};

export default DateTime;
