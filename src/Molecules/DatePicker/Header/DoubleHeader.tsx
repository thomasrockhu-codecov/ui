import React from 'react';
import format from 'date-fns/format';
import { addMonths, subMonths } from 'date-fns';
import { Props } from './Header.types';
import { Box, Flexbox, Link, Icon } from '../../..';
import { getLocale } from '../shared/dateUtils';
import SelectMonth from '../SelectMonth';
import SelectYear from '../SelectYear';

const DoubleHeader: React.FC<Props> = ({
  ariaLabelPrevious = 'Previous month {date}',
  ariaLabelNext = 'Next month {date}',
  id,
  locale,
  viewedDate,
  onMonthChange,
  onYearChange,
  yearSelectLength,
}) => {
  const opts = {
    locale: getLocale(locale),
  };

  const leftViewedDate = viewedDate;
  const rightViewedDate = addMonths(leftViewedDate, 1);

  const ariaLabelPreviousText = ariaLabelPrevious.replace(
    '{date}',
    format(subMonths(viewedDate, 1), 'MMMM yyyy', opts),
  );

  const ariaLabelNextText = ariaLabelNext.replace(
    '{date}',
    format(addMonths(viewedDate, 1), 'MMMM yyyy', opts),
  );

  return (
    <Flexbox container justifyContent="space-between">
      <Box mt={1}>
        <Link
          aria-label={ariaLabelPreviousText}
          data-testid="datepicker-arrow-left"
          onClick={() => {
            onMonthChange(viewedDate.getMonth() - 1);
          }}
        >
          <Icon.ThinChevron size={4} direction="left" />
        </Link>
      </Box>
      <Flexbox container item justifyContent="space-around" flex="1">
        <Flexbox container item>
          <SelectMonth
            id={id}
            locale={locale}
            viewedDate={leftViewedDate}
            onChange={onMonthChange}
          />
          <SelectYear
            id={id}
            locale={locale}
            viewedDate={leftViewedDate}
            years={yearSelectLength}
            onChange={onYearChange}
          />
        </Flexbox>

        <Flexbox container item>
          <SelectMonth
            id={id}
            locale={locale}
            viewedDate={rightViewedDate}
            onChange={onMonthChange}
          />
          <SelectYear
            id={id}
            locale={locale}
            viewedDate={rightViewedDate}
            years={yearSelectLength}
            onChange={onYearChange}
          />
        </Flexbox>
      </Flexbox>
      <Box mt={1}>
        <Link
          aria-label={ariaLabelNextText}
          data-testid="datepicker-arrow-right"
          onClick={() => {
            onMonthChange(viewedDate.getMonth() + 1);
          }}
        >
          <Icon.ThinChevron size={4} direction="right" />
        </Link>
      </Box>
    </Flexbox>
  );
};

export default DoubleHeader;
