import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { addMonths, subMonths } from 'date-fns';
import { Props } from './Header.types';
import { Box, Flexbox, Link, Icon } from '../../..';
import { getLocale } from '../shared/dateUtils';
import SelectMonth from '../SelectMonth';
import SelectYear from '../SelectYear';

const YearMonthContainer = styled(Flexbox)`
  width: ${({ theme }) => theme.spacing.unit(76)}px;
`;

const ChevronContainer = styled(Box)<{ $align: 'left' | 'right' }>`
  position: absolute;
  ${({ $align, theme }) => `${$align}: ${theme.spacing.unit(2)}px;`}
`;

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
      <YearMonthContainer container justifyContent="center" flex="1">
        <ChevronContainer mt={1} $align="left">
          <Link
            aria-label={ariaLabelPreviousText}
            data-testid="datepicker-arrow-left"
            onClick={() => {
              onMonthChange(viewedDate.getMonth() - 1);
            }}
          >
            <Icon.ThinChevron size={4} direction="left" />
          </Link>
        </ChevronContainer>
        <Flexbox container item>
          <SelectMonth
            id={`${id}-left`}
            locale={locale}
            viewedDate={leftViewedDate}
            onChange={onMonthChange}
          />
          <SelectYear
            id={`${id}-left`}
            locale={locale}
            viewedDate={leftViewedDate}
            years={yearSelectLength}
            onChange={onYearChange}
          />
        </Flexbox>
      </YearMonthContainer>

      <YearMonthContainer container justifyContent="center" flex="1">
        <Flexbox container item>
          <SelectMonth
            id={`${id}-right`}
            locale={locale}
            viewedDate={rightViewedDate}
            onChange={onMonthChange}
          />
          <SelectYear
            id={`${id}-right`}
            locale={locale}
            viewedDate={rightViewedDate}
            years={yearSelectLength}
            onChange={onYearChange}
          />
        </Flexbox>
        <ChevronContainer $align="right" mt={1}>
          <Link
            aria-label={ariaLabelNextText}
            data-testid="datepicker-arrow-right"
            onClick={() => {
              onMonthChange(viewedDate.getMonth() + 1);
            }}
          >
            <Icon.ThinChevron size={4} direction="right" />
          </Link>
        </ChevronContainer>
      </YearMonthContainer>
    </Flexbox>
  );
};

export default DoubleHeader;
