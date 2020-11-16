import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { isSameDay, isSameMonth, isWithinInterval } from 'date-fns';
import { Box, Flexbox, Typography } from '../../..';
import { getCalendar, getLocale } from '../shared/dateUtils';
import { Props } from './Calendar.types';
import { FIRST_DAY, LAST_DAY, NUMBER_OF_VISIBLE_DAYS, NUMBER_OF_VISIBLE_WEEKS } from './constants';
import { CalendarDay } from './CalendarDay';

export const StyledBox = styled(Box)`
  border: 1px solid transparent;
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  margin-top: ${({ theme }) => theme.spacing.unit(3)}px;
`;

const Calendar: React.FC<Props> = ({
  disableDate,
  enableDate,
  locale,
  viewedDate,
  onClick,
  selectedDate,
  selectedEndDate,
}) => {
  const [[focusedWeek, focusedDay], setFocused] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
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
    [...Array(NUMBER_OF_VISIBLE_WEEKS)].map(() => {
      return [...Array(NUMBER_OF_VISIBLE_DAYS)].reduce((acc) => {
        return [...acc, React.createRef()];
      }, []);
    }),
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
      calendarDayRefs.current[focusedWeek][focusedDay].current.focus();
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
            <StyledBox>
              <Typography type="tertiary">{n}</Typography>
            </StyledBox>
          </Flexbox>
        ))}
      </Flexbox>
      {calendar.dates.map((week, weekIndex) => (
        <Flexbox container key={week.toString()}>
          {week.map((day, dayIndex) => {
            const edgeDay = (() => {
              if (weekIndex === 0 && dayIndex === 0) return FIRST_DAY;
              if (weekIndex === calendar.dates.length - 1 && dayIndex === week.length - 1)
                return LAST_DAY;
              return null;
            })();

            return (
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
                withinRange={
                  selectedEndDate &&
                  isWithinInterval(day, { start: selectedDate, end: selectedEndDate })
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
