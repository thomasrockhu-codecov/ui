import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import {
  addMonths,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isSameDay,
  isSameMonth,
  isWithinInterval,
} from 'date-fns';
import { Box, Flexbox, Typography } from '../../..';
import { getCalendar, getLocale } from '../shared/dateUtils';
import { Props } from './Calendar.types';
import {
  NUMBER_OF_VISIBLE_DAYS,
  NUMBER_OF_VISIBLE_WEEKS,
  NUMBER_OF_VISIBLE_DAYS_DOUBLE,
  NUMBER_OF_VISIBLE_WEEKS_DOUBLE,
} from './constants';
import { CalendarDay } from './CalendarDay';
import { FlexProps } from '../../../Atoms/Flexbox/Flexbox.types';

export const StyledBox = styled(Box)`
  border: 1px solid transparent;
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  margin-top: ${({ theme }) => theme.spacing.unit(3)}px;
`;

const HiddenDate = styled.div<{ $withGutter?: boolean }>`
  min-width: ${({ theme }) => theme.spacing.unit(10) + 2}px;
  min-height: ${({ theme }) => theme.spacing.unit(10) + 2}px;
  margin: ${({ theme }) => theme.spacing.unit(0.5)}px 0;
  ${({ $withGutter = false }) => ($withGutter ? 'margin-right: 34px;' : '')}
`;

const StyledCalendarContainer = styled(Flexbox)<FlexProps & { $withGutter: boolean }>`
  ${({ $withGutter = false }) => ($withGutter ? 'margin-right: 34px;' : '')}
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
    [...Array(NUMBER_OF_VISIBLE_WEEKS_DOUBLE)].map(() =>
      [...Array(NUMBER_OF_VISIBLE_DAYS_DOUBLE)].map(() => React.createRef<HTMLDivElement>()),
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
  const calendar = {
    weekDays: [...leftCalendar.weekDays, ...rightCalendar.weekDays],
    dates: leftCalendar.dates.map((leftWeek, index) => [
      ...leftWeek,
      ...rightCalendar.dates[index],
    ]),
  };

  return (
    <Flexbox
      container
      direction="row"
      justifyContent="space-between"
      data-testid="datepicker-calendars"
    >
      <Flexbox container direction="column" aria-hidden>
        <Flexbox container>
          {calendar.weekDays.map((n, index) => (
            <StyledCalendarContainer
              item
              justifyContent="center"
              alignItems="center"
              key={n}
              $withGutter={index === 6}
            >
              <StyledBox>
                <Typography type="tertiary">{n}</Typography>
              </StyledBox>
            </StyledCalendarContainer>
          ))}
        </Flexbox>
        {calendar.dates.map((week, weekIndex) => (
          <Flexbox container justifyContent="flex-start" key={week.toString()}>
            {week.map((day, dayIndex) => {
              const shouldNotRender =
                (!isSameMonth(leftViewedDate, day) &&
                  isSameMonth(rightViewedDate, day) &&
                  dayIndex < 7) ||
                (!isSameMonth(rightViewedDate, day) &&
                  isSameMonth(leftViewedDate, day) &&
                  dayIndex >= 7);
              return shouldNotRender ? (
                <HiddenDate $withGutter={dayIndex === 6} aria-hidden />
              ) : (
                <CalendarDay
                  ref={calendarDayRefs.current[weekIndex][dayIndex]}
                  withGutter={dayIndex === 6}
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
                  sameMonth={isSameMonth(leftViewedDate, day) || isSameMonth(rightViewedDate, day)}
                  locale={localeObj}
                  isWithinRange={(() => {
                    if (selectedEndDate && selectedDate < selectedEndDate)
                      return isWithinInterval(day, { start: selectedDate, end: selectedEndDate });
                    if (selectedEndDate && selectedDate > selectedEndDate)
                      return isWithinInterval(day, { start: selectedEndDate, end: selectedDate });
                    return false;
                  })()}
                  isFirstDay={
                    (weekIndex === 0 && dayIndex === 0) ||
                    (isFirstDayOfMonth(day) && isSameMonth(rightViewedDate, day))
                  }
                  isLastDay={
                    (weekIndex === calendar.dates.length - 1 && dayIndex === week.length - 1) ||
                    (isLastDayOfMonth(day) && isSameMonth(leftViewedDate, day))
                  }
                />
              );
            })}
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  );
};

export default DoubleCalendar;
