import React, { useEffect, useRef, useMemo, useState } from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import {
  addMonths,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  subMonths,
} from 'date-fns';
import { Box, Flexbox, Typography } from '../../../..';
import { getCalendar, getCalendarIndex, getLocale, newDate } from '../../shared/dateUtils';
import { FlexProps } from '../../../../Atoms/Flexbox/Flexbox.types';
import { Props } from './DoubleCalendar.types';
import {
  NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE,
  NUMBER_OF_VISIBLE_WEEKS_SINGLE,
  NUMBER_OF_VISIBLE_WEEKDAYS_DOUBLE,
  NUMBER_OF_VISIBLE_ROWS_DOUBLE,
  DOUBLE_CALENDAR_GUTTER,
} from '../../shared/constants';
import CalendarDay from '../../shared/components/CalendarDay';

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
  ${({ $withGutter }) => ($withGutter ? `margin-right: ${DOUBLE_CALENDAR_GUTTER}px;` : '')}
`;

const StyledCalendarContainer = styled(Flexbox)<FlexProps & { $withGutter: boolean }>`
  ${({ $withGutter }) => ($withGutter ? `margin-right: ${DOUBLE_CALENDAR_GUTTER}px;` : '')}
`;

const DoubleCalendar: React.FC<Props> = ({
  disableDate,
  enableDate,
  locale,
  viewedDate,
  onClick,
  selectedStartDate,
  selectedEndDate,
  controlledFocus,
  setViewedDate,
}) => {
  const [[focusedWeek, focusedDay], setFocused] = useState<[number | null, number | null]>([
    null,
    null,
  ]);
  const focusedDateObjRef = useRef<Date | null>(null);

  const dateIsDisabled = (dateToCheck: Date | null) => {
    const isEnabled = dateToCheck && enableDate?.(dateToCheck);
    const isDisabled = dateToCheck && disableDate?.(dateToCheck);

    if (R.isNil(isEnabled) && R.isNil(isDisabled)) return false;
    if (R.isNil(isEnabled)) return isDisabled;
    if (R.isNil(isDisabled)) return !isEnabled;
    return false;
  };

  const localeObj = getLocale(locale);

  const calendar = useMemo(() => {
    const leftCalendar = getCalendar(viewedDate, {
      locale: localeObj,
    });
    const rightCalendar = getCalendar(addMonths(viewedDate, 1), {
      locale: localeObj,
    });
    return {
      weekDays: [...leftCalendar.weekDays, ...rightCalendar.weekDays],
      dates: leftCalendar.dates.map((leftWeek, index) => [
        ...leftWeek,
        ...rightCalendar.dates[index],
      ]),
    };
  }, [localeObj, viewedDate]);

  const calendarDayRefs = useRef(
    useMemo(() => {
      return [...Array(NUMBER_OF_VISIBLE_ROWS_DOUBLE)].map(() =>
        [...Array(NUMBER_OF_VISIBLE_WEEKDAYS_DOUBLE)].map(() => React.createRef<HTMLDivElement>()),
      );
    }, []),
  );

  const stepToCalendarPage = (focusDate: Date, steppingDirection: 'left' | 'right') => {
    switch (steppingDirection) {
      case 'left':
        setViewedDate(focusDate);
        // eslint-disable-next-line no-case-declarations
        const newCalendarLeft = getCalendar(subMonths(viewedDate, 1), {
          locale: localeObj,
        });
        setFocused(getCalendarIndex(focusDate, newCalendarLeft));
        break;
      case 'right':
        setViewedDate(focusDate);
        // eslint-disable-next-line no-case-declarations
        const newCalendarRight = getCalendar(addMonths(viewedDate, 2), {
          locale: localeObj,
        });
        setFocused(getCalendarIndex(focusDate, newCalendarRight));
        break;

      default:
        break;
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    event.stopPropagation();

    if (R.isNil(focusedWeek) || R.isNil(focusedDay)) {
      setFocused([0, 0]);
    } else {
      const focusDate = newDate(calendar.dates[focusedWeek][focusedDay]);
      switch (event.key) {
        case 'ArrowLeft':
          if (focusedDay > 0) {
            setFocused([focusedWeek, focusedDay - 1]);
          } else if (focusedWeek > 0) {
            setFocused([focusedWeek - 1, NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1]);
          } else {
            // we are in the top left corner of calendar
            stepToCalendarPage(focusDate, 'left');
          }
          break;

        case 'ArrowRight':
          if (
            focusedDay === NUMBER_OF_VISIBLE_WEEKDAYS_DOUBLE - 1 &&
            focusedWeek === NUMBER_OF_VISIBLE_ROWS_DOUBLE - 1
          ) {
            stepToCalendarPage(focusDate, 'right');
          } else if (isLastDayOfMonth(focusDate) && isSameMonth(focusDate, viewedDate)) {
            setFocused([0, 11]);
          } else if (focusedDay === NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1) {
            setFocused([focusedWeek + 1, 0]);
          } else if (focusedDay === NUMBER_OF_VISIBLE_WEEKDAYS_DOUBLE - 1) {
            setFocused([focusedWeek + 1, 7]);
          } else {
            setFocused([focusedWeek, focusedDay + 1]);
          }
          break;

        case 'ArrowUp':
          if (focusedWeek > 0) {
            setFocused([focusedWeek - 1, focusedDay]);
          }
          break;

        case 'ArrowDown':
          if (focusedWeek < NUMBER_OF_VISIBLE_WEEKS_SINGLE - 1) {
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

  useEffect(() => {
    if (controlledFocus) setFocused([0, 0]);
  }, [controlledFocus, setFocused]);

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
              key={`${n}-${index < NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE ? 'left' : 'right'}`}
              $withGutter={index === NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1}
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
              const hideDate =
                (!isSameMonth(leftViewedDate, day) &&
                  isSameMonth(rightViewedDate, day) &&
                  dayIndex < NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE) ||
                (!isSameMonth(rightViewedDate, day) &&
                  isSameMonth(leftViewedDate, day) &&
                  dayIndex >= NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE);
              return hideDate ? (
                <HiddenDate
                  key={day.toString()}
                  $withGutter={dayIndex === NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1}
                  aria-hidden
                  tabIndex={-1}
                />
              ) : (
                <CalendarDay
                  ref={calendarDayRefs.current[weekIndex][dayIndex]}
                  withGutter={dayIndex === NUMBER_OF_VISIBLE_WEEKDAYS_SINGLE - 1}
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
                    (selectedStartDate && isSameDay(selectedStartDate, day)) ||
                    (selectedEndDate && isSameDay(selectedEndDate, day))
                  }
                  sameMonth={isSameMonth(leftViewedDate, day) || isSameMonth(rightViewedDate, day)}
                  locale={localeObj}
                  isWithinRange={(() => {
                    if (selectedStartDate && selectedEndDate && selectedStartDate < selectedEndDate)
                      return isWithinInterval(day, {
                        start: selectedStartDate,
                        end: selectedEndDate,
                      });
                    if (selectedStartDate && selectedEndDate && selectedStartDate > selectedEndDate)
                      return isWithinInterval(day, {
                        start: selectedEndDate,
                        end: selectedStartDate,
                      });
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
