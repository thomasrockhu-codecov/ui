import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { addMonths, isSameDay, isSameMonth, isWithinInterval } from 'date-fns';
import { Box, Flexbox, Typography } from '../../..';
import { getCalendar, getLocale } from '../shared/dateUtils';
import { Props } from './Calendar.types';
import { NUMBER_OF_VISIBLE_DAYS, NUMBER_OF_VISIBLE_WEEKS } from './constants';
import { CalendarDay } from './CalendarDay';

export const StyledBox = styled(Box)`
  border: 1px solid transparent;
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  margin-top: ${({ theme }) => theme.spacing.unit(3)}px;
`;

const DoubleCalendar: React.FC<Props> = ({
  disableDate,
  enableDate,
  locale,
  viewedDate,
  onClick,
  selectedDate,
  selectedEndDate,
  focusedState,
}) => {
  const [[focusedWeek, focusedDay], setFocused] = focusedState;
  const focusedDateObjRef = useRef<Date | null>(null);

  const dateIsDisabled = (dateToCheck: Date | null) => {
    const isEnabled = dateToCheck && enableDate && enableDate(dateToCheck);
    const isDisabled = dateToCheck && disableDate && disableDate(dateToCheck);

    if (R.isNil(isEnabled) && R.isNil(isDisabled)) return false;
    if (R.isNil(isEnabled)) return isDisabled;
    if (R.isNil(isDisabled)) return !isEnabled;
    return false;
  };

  const calendarDayRefs = useRef(
    [...Array(NUMBER_OF_VISIBLE_WEEKS)].map(() =>
      [...Array(NUMBER_OF_VISIBLE_DAYS)].map(() => React.createRef<HTMLDivElement>()),
    ),
  );

  const handleKeyPress = (event: React.KeyboardEvent) => {
    event.stopPropagation();

    if (R.isNil(focusedWeek) || R.isNil(focusedDay)) {
      setFocused([0, 0]);
    } else {
      switch (event.key) {
        case 'ArrowLeft':
          if (focusedDay > 0) {
            setFocused([focusedWeek, focusedDay - 1]);
          } else if (focusedWeek > 0) {
            setFocused([focusedWeek - 1, NUMBER_OF_VISIBLE_DAYS - 1]);
          }
          break;

        case 'ArrowRight':
          if (focusedDay < NUMBER_OF_VISIBLE_DAYS - 1) {
            setFocused([focusedWeek, focusedDay + 1]);
          } else if (focusedWeek < NUMBER_OF_VISIBLE_WEEKS - 1) {
            setFocused([focusedWeek + 1, 0]);
          }
          break;

        case 'ArrowUp':
          if (focusedWeek > 0) {
            setFocused([focusedWeek - 1, focusedDay]);
          }
          break;

        case 'ArrowDown':
          if (focusedWeek < NUMBER_OF_VISIBLE_WEEKS - 1) {
            setFocused([focusedWeek + 1, focusedDay]);
          }
          break;

        case ' ': // Spacebar
        case 'Enter':
          if (focusedDateObjRef.current && !dateIsDisabled(focusedDateObjRef.current)) {
            onClick(new Date(focusedDateObjRef.current));
          }
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
      !R.isNil(calendarDayRefs.current[focusedWeek][focusedDay].current)
    ) {
      calendarDayRefs.current[focusedWeek][focusedDay].current?.focus();
    }
  }, [focusedDay, focusedWeek]);

  const leftViewedDate = viewedDate;
  const rightViewedDate = addMonths(leftViewedDate, 1);

  const localeObj = getLocale(locale);
  const leftCalendar = getCalendar(viewedDate, {
    locale: localeObj,
  });
  const rightCalendar = getCalendar(addMonths(viewedDate, 1), {
    locale: localeObj,
  });

  return (
    <Flexbox
      container
      direction="row"
      justifyContent="space-between"
      data-testid="datepicker-calendars"
    >
      <Flexbox container direction="column" data-testid="datepicker-calendar-left">
        <Flexbox container aria-hidden>
          {leftCalendar.weekDays.map((n) => (
            <Flexbox item justifyContent="center" alignItems="center" key={n}>
              <StyledBox>
                <Typography type="tertiary">{n}</Typography>
              </StyledBox>
            </Flexbox>
          ))}
        </Flexbox>
        {leftCalendar.dates.map((week, weekIndex) => (
          <Flexbox container justifyContent="flex-start" key={week.toString()}>
            {week.map((day, dayIndex) =>
              !isSameMonth(day, rightViewedDate) ? (
                <CalendarDay
                  ref={calendarDayRefs.current[weekIndex][dayIndex]}
                  onFocus={() => {
                    setFocused([weekIndex, dayIndex]);
                    focusedDateObjRef.current = day;
                  }}
                  key={day.toString()}
                  date={day}
                  disabled={!!dateIsDisabled(day)}
                  onClick={() => {
                    if (!dateIsDisabled(day)) onClick(day);
                  }}
                  onKeyDown={handleKeyPress}
                  selected={
                    (selectedDate && isSameDay(selectedDate, day)) ||
                    (selectedEndDate && isSameDay(selectedEndDate, day))
                  }
                  sameMonth={isSameMonth(viewedDate, day)}
                  locale={localeObj}
                  isWithinRange={(() => {
                    if (selectedEndDate && selectedDate < selectedEndDate)
                      return isWithinInterval(day, { start: selectedDate, end: selectedEndDate });
                    if (selectedEndDate && selectedDate > selectedEndDate)
                      return isWithinInterval(day, { start: selectedEndDate, end: selectedDate });
                    return false;
                  })()}
                  isFirstDay={weekIndex === 0 && dayIndex === 0}
                  isLastDay={
                    weekIndex === leftCalendar.dates.length - 1 && dayIndex === week.length - 1
                  }
                />
              ) : null,
            )}
          </Flexbox>
        ))}
      </Flexbox>
      <Flexbox container direction="column" data-testid="datepicker-calendar-right">
        <Flexbox container aria-hidden>
          {rightCalendar.weekDays.map((n) => (
            <Flexbox item justifyContent="center" alignItems="center" key={n}>
              <StyledBox>
                <Typography type="tertiary">{n}</Typography>
              </StyledBox>
            </Flexbox>
          ))}
        </Flexbox>
        {rightCalendar.dates.map((week, weekIndex) => (
          <Flexbox justifyContent="flex-end" container key={week.toString()}>
            {week.map((day, dayIndex) =>
              !isSameMonth(day, leftViewedDate) ? (
                <CalendarDay
                  ref={calendarDayRefs.current[weekIndex][dayIndex]}
                  onFocus={() => {
                    setFocused([weekIndex, dayIndex]);
                    focusedDateObjRef.current = day;
                  }}
                  key={day.toString()}
                  date={day}
                  disabled={!!dateIsDisabled(day)}
                  onClick={() => {
                    if (!dateIsDisabled(day)) onClick(day);
                  }}
                  onKeyDown={handleKeyPress}
                  selected={
                    (selectedDate && isSameDay(selectedDate, day)) ||
                    (selectedEndDate && isSameDay(selectedEndDate, day))
                  }
                  sameMonth={isSameMonth(rightViewedDate, day)}
                  locale={localeObj}
                  isWithinRange={(() => {
                    if (selectedEndDate && selectedDate < selectedEndDate)
                      return isWithinInterval(day, { start: selectedDate, end: selectedEndDate });
                    if (selectedEndDate && selectedDate > selectedEndDate)
                      return isWithinInterval(day, { start: selectedEndDate, end: selectedDate });
                    return false;
                  })()}
                  isFirstDay={weekIndex === 0 && dayIndex === 0}
                  isLastDay={
                    weekIndex === rightCalendar.dates.length - 1 && dayIndex === week.length - 1
                  }
                />
              ) : null,
            )}
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  );
};

export default DoubleCalendar;
