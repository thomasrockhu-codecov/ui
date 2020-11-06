import React, { useCallback, useEffect, useState } from 'react';
import { format, isSameDay, isSameMonth, isToday, isWithinInterval } from 'date-fns';
import styled from 'styled-components';
import { Box, Flexbox, Typography } from '../../..';
import { useKeyPress } from '../../../common/Hooks';
import { getCalendar, getLocale, newDate } from '../shared/dateUtils';
import { CalendarDayProps, Props, EdgeDay } from './Calendar.types';

const FIRST_DAY = 'FIRST_DAY';
const LAST_DAY = 'LAST_DAY';

const StyledWeekDay = styled(Box)`
  border: 1px solid transparent;
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  margin-top: ${({ theme }) => theme.spacing.unit(3)}px;
`;

const StyledCalendarDay = styled(Box)<{
  $disabled?: boolean;
  $selected?: boolean;
  $focus?: boolean;
  $withinRange?: boolean;
  $isToday?: boolean;
  $edgeDay: EdgeDay | null;
}>`
  background: ${({ theme }) => theme.color.backgroundInput};
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  min-height: ${({ theme }) => theme.spacing.unit(10)}px;
  border: 1px solid transparent;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  ${({ $disabled, $selected, $focus, $withinRange, $isToday, $edgeDay, theme }) => `
    ${$isToday ? `border: 1px solid ${theme.color.inputBorder};` : ''}
    ${$withinRange ? `background: ${theme.color.datePickerWithinRangeBackground};` : ''}
    ${
      $edgeDay === FIRST_DAY
        ? `background: linear-gradient(to right, ${theme.color.datePickerWithinRangeBackground}33,${theme.color.datePickerWithinRangeBackground});
        background-repeat: no-repeat;`
        : ''
    }
    ${
      $edgeDay === LAST_DAY
        ? `background: linear-gradient(to left, ${theme.color.datePickerWithinRangeBackground}33, ${theme.color.datePickerWithinRangeBackground});
        background-repeat: no-repeat;`
        : ''
    }
    ${$focus ? `border: 1px solid ${theme.color.cta};` : ''}
    ${
      $selected
        ? `
          background: ${theme.color.cta};
          border: 1px solid transparent;`
        : ''
    }
    ${
      $disabled
        ? `
          color: ${theme.color.disabledText};
          cursor: not-allowed;
          border: 1px solid transparent;`
        : ''
    }
  `}
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.cta};
  }
`;

const CalendarDay: React.FC<CalendarDayProps> = ({
  className = '',
  date,
  enabled = true,
  disabled = false,
  locale,
  onClick,
  sameMonth = true,
  hover = false,
  selected,
  withinRange = false,
  edgeDay,
}) => {
  const textColor = (() => {
    if (disabled || (typeof enabled === 'boolean' && !enabled)) {
      return 'label';
    }
    if (!sameMonth && !selected) {
      return 'label';
    }
    if (selected) {
      return 'buttonText';
    }
    if (!selected && hover) {
      return 'text';
    }
    return '';
  })();

  const handleOnClick = useCallback(() => {
    if (disabled) {
      return;
    }

    if (onClick) {
      onClick(date);
    }
  }, [date, disabled, onClick]);

  const ariaLabel = format(date, 'cccc co MMMM, yyyy', {
    locale,
  });

  return (
    <StyledCalendarDay
      className={className}
      $disabled={disabled || (typeof enabled === 'boolean' && !enabled)}
      $selected={selected}
      $focus={!selected && hover}
      $withinRange={withinRange}
      $isToday={isToday(date)}
      $edgeDay={edgeDay}
      onClick={handleOnClick}
      aria-label={ariaLabel}
    >
      <Typography type="tertiary" color={(t) => t.color[textColor || 'text']}>
        {format(date, 'd')}
      </Typography>
    </StyledCalendarDay>
  );
};

const Calendar: React.FC<Props> = ({
  disableDate,
  enableDate,
  locale,
  viewedDate,
  onClick,
  selectedDate,
  selectedEndDate,
}) => {
  const arrowLeft = useKeyPress('ArrowLeft');
  const arrowRight = useKeyPress('ArrowRight');
  const arrowUp = useKeyPress('ArrowUp');
  const arrowDown = useKeyPress('ArrowDown');
  const enter = useKeyPress('Enter');
  const [hoverDate, setHoverDate] = useState<Date>(newDate(selectedDate || viewedDate));

  useEffect(() => {
    if (arrowLeft) {
      hoverDate.setDate(hoverDate.getDate() - 1);
      setHoverDate(hoverDate);
    } else if (arrowRight) {
      hoverDate.setDate(hoverDate.getDate() + 1);
      setHoverDate(hoverDate);
    } else if (arrowUp) {
      hoverDate.setDate(hoverDate.getDate() - 7);
      setHoverDate(hoverDate);
    } else if (arrowDown) {
      hoverDate.setDate(hoverDate.getDate() + 7);
      setHoverDate(hoverDate);
    } else if (enter) {
      onClick(new Date(hoverDate));
    }
  }, [hoverDate, arrowLeft, arrowRight, arrowUp, arrowDown, enter, onClick, setHoverDate]);

  useEffect(() => {
    setHoverDate(new Date(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    if (selectedEndDate) {
      setHoverDate(new Date(selectedEndDate));
    }
  }, [selectedEndDate]);

  const localeObj = getLocale(locale);
  const calendar = getCalendar(viewedDate, {
    locale: localeObj,
  });

  return (
    <Flexbox container direction="column" data-testid="datepicker-calendar">
      <Flexbox container aria-hidden>
        {calendar.weekDays.map((n) => (
          <Flexbox item justifyContent="center" alignItems="center" key={n}>
            <StyledWeekDay>
              <Typography type="tertiary">{n}</Typography>
            </StyledWeekDay>
          </Flexbox>
        ))}
      </Flexbox>
      {calendar.dates.map((week, weekIndex) => (
        <Flexbox container key={week.toString()}>
          {week.map((d, dayIndex) => {
            const edgeDay = (() => {
              if (weekIndex === 0 && dayIndex === 0) return FIRST_DAY;
              if (weekIndex === calendar.dates.length - 1 && dayIndex === week.length - 1)
                return LAST_DAY;
              return null;
            })();

            return (
              <CalendarDay
                key={d.toString()}
                date={d}
                enabled={enableDate && enableDate(d)}
                disabled={disableDate && disableDate(d)}
                onClick={() => onClick(d)}
                selected={
                  (selectedDate && isSameDay(selectedDate, d)) ||
                  (selectedEndDate && isSameDay(selectedEndDate, d))
                }
                sameMonth={isSameMonth(viewedDate, d)}
                locale={localeObj}
                hover={hoverDate && isSameDay(hoverDate, d)}
                withinRange={
                  selectedEndDate &&
                  isWithinInterval(d, { start: selectedDate, end: selectedEndDate })
                }
                edgeDay={edgeDay}
              />
            );
          })}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Calendar;
