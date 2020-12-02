import { addMonths, isAfter, isBefore, isSameDay, isSameMonth } from 'date-fns';
import R from 'ramda';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Flexbox } from '../../../..';
import { getCalendarV2 } from '../../shared/dateUtils';

const StyledGridContainerLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  row-gap: 4px;
`;

const StyledGridContainerRight = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 40px);
  grid-template-rows: repeat(6, 40px);
  row-gap: 4px;
`;

const SameMonthCalendarDay = styled.div`
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  min-height: ${({ theme }) => theme.spacing.unit(10)}px;
  justify-content: center;
  align-items: center;
  background: #c0c4ff;
  display: flex;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.backgroundInput};
  box-sizing: border-box;
`;
const NotSameMonthCalendarDay = styled.div`
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  min-height: ${({ theme }) => theme.spacing.unit(10)}px;
  background: #c1fff7;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.backgroundInput};
  box-sizing: border-box;
`;

const BlankDate = styled.div`
  min-width: ${({ theme }) => theme.spacing.unit(10)}px;
  min-height: ${({ theme }) => theme.spacing.unit(10)}px;
`;

const CalendarV2: React.FC<any> = ({ viewedDate, setViewedDate, focusedState }) => {
  const leftCalendar = getCalendarV2(viewedDate);
  const rightCalendar = getCalendarV2(addMonths(viewedDate, 1));

  const [focusedIndex, setFocusedIndex] = focusedState;
  const focusedDateObjRef = useRef<Date | null>(null);

  const collectionCalendar = [...leftCalendar, ...rightCalendar].filter(
    (date, i, self) => self.findIndex((d) => d.getTime() === date.getTime()) === i,
  );

  const calendarRefs = useRef(
    [...Array(collectionCalendar.length)].map(() => React.createRef<HTMLDivElement>()),
  );

  const stepToCalendarPage = (focusDate: Date, viewDate: Date = focusDate) => {
    setViewedDate(viewDate);
    setFocusedIndex(focusDate);
  };
  const handleKeyPress = (event: React.KeyboardEvent, date: Date) => {
    event.stopPropagation();

    const calendarIndex = collectionCalendar.findIndex((d) => isSameDay(d, date));

    if (R.isNil(focusedIndex)) {
      setFocusedIndex(0);
    } else {
      switch (event.key) {
        case 'ArrowLeft':
          if (focusedIndex === 0) {
            stepToCalendarPage(collectionCalendar[focusedIndex]);
          } else {
            setFocusedIndex(calendarIndex - 1);
          }
          break;

        case 'ArrowRight':
          setFocusedIndex(calendarIndex + 1);
          break;

        case 'ArrowUp':
          setFocusedIndex(calendarIndex - 7);
          break;

        case 'ArrowDown':
          setFocusedIndex(calendarIndex + 7);
          break;

        case ' ': // Spacebar
        case 'Enter':
          /* if (focusedDateObjRef.current && !dateIsDisabled(focusedDateObjRef.current)) {
            onClick(new Date(focusedDateObjRef.current));
          } */
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (!R.isNil(focusedIndex) && !R.isNil(calendarRefs.current[focusedIndex]?.current)) {
      calendarRefs.current[focusedIndex].current?.focus();
    }
  }, [focusedIndex]);

  return (
    <Flexbox container gutter={4}>
      <StyledGridContainerLeft>
        {leftCalendar.map((date: Date) => {
          const currentDayIndex = collectionCalendar.findIndex((d) => isSameDay(d, date));
          if (isSameMonth(date, viewedDate)) {
            return (
              <SameMonthCalendarDay
                ref={calendarRefs.current[currentDayIndex]}
                onFocus={() => {
                  setFocusedIndex(currentDayIndex);
                  focusedDateObjRef.current = date;
                }}
                onClick={() => console.log(date)}
                tabIndex={0}
                onKeyDown={(e) => handleKeyPress(e, date)}
              >
                {date.getDate().toString()}
              </SameMonthCalendarDay>
            );
          }
          if (isBefore(date, viewedDate)) {
            return (
              <NotSameMonthCalendarDay
                ref={calendarRefs.current[currentDayIndex]}
                onFocus={() => {
                  setFocusedIndex(currentDayIndex);
                  focusedDateObjRef.current = date;
                }}
                onClick={() => console.log(date)}
                tabIndex={0}
                onKeyDown={(e) => handleKeyPress(e, date)}
              >
                {date.getDate().toString()}
              </NotSameMonthCalendarDay>
            );
          }
          return <BlankDate />;
        })}
      </StyledGridContainerLeft>
      <StyledGridContainerRight>
        {rightCalendar.map((date: Date) => {
          const currentDayIndex = collectionCalendar.findIndex((d) => isSameDay(d, date));

          if (isSameMonth(date, addMonths(viewedDate, 1))) {
            return (
              <SameMonthCalendarDay
                ref={calendarRefs.current[currentDayIndex]}
                onFocus={() => {
                  setFocusedIndex(currentDayIndex);
                  focusedDateObjRef.current = date;
                }}
                onClick={() => console.log(date)}
                tabIndex={0}
                onKeyDown={(e) => handleKeyPress(e, date)}
              >
                {date.getDate().toString()}
              </SameMonthCalendarDay>
            );
          }
          if (isAfter(date, addMonths(viewedDate, 1))) {
            return (
              <NotSameMonthCalendarDay
                ref={calendarRefs.current[currentDayIndex]}
                onFocus={() => {
                  setFocusedIndex(currentDayIndex);
                  focusedDateObjRef.current = date;
                }}
                onClick={() => console.log(date)}
                tabIndex={0}
                onKeyDown={(e) => handleKeyPress(e, date)}
              >
                {date.getDate().toString()}
              </NotSameMonthCalendarDay>
            );
          }
          return <BlankDate />;
        })}
      </StyledGridContainerRight>
    </Flexbox>
  );
};

// return isSameMonth(date, addMonths(viewedDate, 1)) ? (
//   <SameMonthCalendarDay tabIndex={0}>{date.getDate().toString()}</SameMonthCalendarDay>
// ) : isAfter(date, addMonths(viewedDate, 1)) ? (
//   <NotSameMonthCalendarDay tabIndex={-1}>
//     date.getDate().toString()
//   </NotSameMonthCalendarDay>
// ) : (
//   <BlankDate />
// );

export default CalendarV2;
