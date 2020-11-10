import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as R from 'ramda';
import { format, isSameDay, isSameMonth, isToday, isWithinInterval } from 'date-fns';
import styled from 'styled-components';
import { Box, Flexbox, Typography } from '../../..';
import { getCalendar, getLocale } from '../shared/dateUtils';
import { CalendarDayProps, Props, EdgeDay } from './Calendar.types';

const FIRST_DAY = 'FIRST_DAY';
const LAST_DAY = 'LAST_DAY';
const NUMBER_OF_VISIBLE_WEEKS = 6;
const NUMBER_OF_VISIBLE_DAYS = 7;

const calendarDayRefs = [...Array(NUMBER_OF_VISIBLE_WEEKS)].map(() => {
  return [...Array(NUMBER_OF_VISIBLE_DAYS)].reduce((acc) => {
    return [...acc, React.createRef()];
  }, []);
});

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
  $withinRange?: boolean;
  $isToday?: boolean;
  $edgeDay: EdgeDay | null;
}>`
  background: ${({ theme }) => theme.color.backgroundInput};
  min-width: ${({ theme }) => theme.spacing.unit(10) + 2}px;
  min-height: ${({ theme }) => theme.spacing.unit(10) + 2}px;
  margin: ${({ theme }) => theme.spacing.unit(0.5)}px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;

  ${({ $disabled, $selected, $withinRange, $isToday, $edgeDay, theme }) => `
    ${$isToday ? `border: 1px solid ${theme.color.inputBorder};` : ''}
    ${$withinRange ? `background: ${theme.color.datePickerWithinRangeBackground};` : ''}
    ${
      $withinRange && $edgeDay === FIRST_DAY
        ? `background: linear-gradient(to right, ${theme.color.backgroundInput} 10%, ${theme.color.datePickerWithinRangeBackground});`
        : ''
    }
    ${
      $withinRange && $edgeDay === LAST_DAY
        ? `background: linear-gradient(to left, ${theme.color.backgroundInput} 10%, ${theme.color.datePickerWithinRangeBackground});`
        : ''
    }
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

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.cta};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.cta};
  }
`;

const CalendarDay = React.forwardRef<HTMLDivElement, CalendarDayProps>(
  (
    {
      onFocus,
      className = '',
      date,
      enabled = true,
      disabled = false,
      locale,
      onClick,
      onKeyDown,
      sameMonth = true,
      selected,
      withinRange = false,
      edgeDay,
    },
    ref,
  ) => {
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
      if (!selected) {
        return 'text';
      }
      return '';
    })();

    const handleOnClick = useCallback(() => {
      if (disabled) return;
      if (onClick) onClick(date);
    }, [date, disabled, onClick]);

    const ariaLabel = format(date, 'cccc co MMMM, yyyy', {
      locale,
    });

    return (
      <StyledCalendarDay
        // @ts-ignore
        ref={ref} // TODO: ref should be allowed here, seems to be an issue with Styled Components
        className={className}
        $disabled={disabled || (typeof enabled === 'boolean' && !enabled)}
        $selected={selected}
        $withinRange={withinRange}
        $isToday={isToday(date)}
        $edgeDay={edgeDay}
        onClick={handleOnClick}
        onKeyDown={onKeyDown}
        onFocus={() => onFocus()}
        aria-label={ariaLabel}
        tabIndex={0}
      >
        <Typography type="tertiary" color={(t) => t.color[textColor || 'text']}>
          {format(date, 'd')}
        </Typography>
      </StyledCalendarDay>
    );
  },
);

const Calendar: React.FC<Props> = ({
  disableDate,
  enableDate,
  locale,
  viewedDate,
  onClick,
  selectedDate,
  selectedEndDate,
}) => {
  // const [focusDate, setFocusDate] = useState<Date>(newDate(selectedDate || viewedDate));

  const [[focusedWeek, focusedDay], setFocused] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const focusedDateObjRef = useRef<Date | null>(null);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (R.isNil(focusedWeek) || R.isNil(focusedDay)) {
      setFocused([0, 0]);
    } else {
      switch (event.key) {
        case 'ArrowLeft':
          if (focusedDay > 0) {
            setFocused([focusedWeek, focusedDay - 1]);
          } else if (focusedDay === 0 && focusedWeek === 0) {
            setFocused([0, 0]);
          } else {
            setFocused([focusedWeek - 1, NUMBER_OF_VISIBLE_DAYS - 1]);
          }

          break;

        case 'ArrowRight':
          if (focusedDay < NUMBER_OF_VISIBLE_DAYS - 1) {
            setFocused([focusedWeek, focusedDay + 1]);
          } else if (
            focusedDay === NUMBER_OF_VISIBLE_DAYS - 1 &&
            focusedWeek === NUMBER_OF_VISIBLE_WEEKS - 1
          ) {
            setFocused([NUMBER_OF_VISIBLE_WEEKS - 1, NUMBER_OF_VISIBLE_DAYS - 1]);
          } else {
            setFocused([focusedWeek + 1, 0]);
          }
          break;

        case 'ArrowUp':
          if (focusedWeek === 0) {
            setFocused([0, focusedDay]);
          } else {
            setFocused([focusedWeek - 1, focusedDay]);
          }
          break;

        case 'ArrowDown':
          if (focusedWeek === NUMBER_OF_VISIBLE_WEEKS - 1) {
            setFocused([NUMBER_OF_VISIBLE_WEEKS - 1, focusedDay]);
          } else {
            setFocused([focusedWeek + 1, focusedDay]);
          }
          break;

        case 'Enter':
          if (!R.isNil(focusedDateObjRef.current)) onClick(new Date(focusedDateObjRef.current));
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (
      !R.isNil(focusedWeek) &&
      !R.isNil(focusedDay) &&
      !R.isNil(calendarDayRefs[focusedWeek][focusedDay])
    ) {
      calendarDayRefs[focusedWeek][focusedDay].current.focus();
    }
  }, [focusedDay, focusedWeek]);

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
                ref={calendarDayRefs[weekIndex][dayIndex]}
                onFocus={() => {
                  setFocused([weekIndex, dayIndex]);
                  focusedDateObjRef.current = d;
                }}
                key={d.toString()}
                date={d}
                enabled={enableDate && enableDate(d)}
                disabled={disableDate && disableDate(d)}
                onClick={() => onClick(d)}
                onKeyDown={handleKeyPress}
                selected={
                  (selectedDate && isSameDay(selectedDate, d)) ||
                  (selectedEndDate && isSameDay(selectedEndDate, d))
                }
                sameMonth={isSameMonth(viewedDate, d)}
                locale={localeObj}
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
