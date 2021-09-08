import { useEffect, useState } from 'react';
import * as R from 'ramda';
import { isAfter, subDays, addDays, subWeeks, addWeeks, isSameDay } from 'date-fns';
import { Props } from './useFocusedDate.types';
import { newDate } from '../dateUtils';
import { useOnBlur } from './useOnBlur';

export const useFocusedDate = ({
  calendarRef,
  viewedDate,
  calendar,
  onMonthChange,
  dateIsDisabled,
  onSelectDate,
}: Props) => {
  const [focusedDate, setFocusedDate] = useState<Date | undefined>();

  useOnBlur({
    ref: calendarRef,
    onBlur: () => setFocusedDate(undefined),
  });

  useEffect(() => {
    if (focusedDate) {
      const datesInCalendar = R.flatten(calendar.dates);

      const inCurrentView = datesInCalendar.some((date) => isSameDay(date, focusedDate));

      if (!inCurrentView) {
        // if focused date is after viewed date, it means that we should go to next month
        if (isAfter(focusedDate, viewedDate)) {
          onMonthChange(viewedDate.getMonth() + 1);
        }
        // if focused date is before viewed date, it means that we should go to previous month
        else {
          onMonthChange(viewedDate.getMonth() - 1);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedDate]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    event.stopPropagation();

    switch (event.key) {
      case 'ArrowLeft':
        setFocusedDate(subDays(newDate(focusedDate), 1));
        break;

      case 'ArrowRight':
        setFocusedDate(addDays(newDate(focusedDate), 1));
        break;

      case 'ArrowUp':
        setFocusedDate(subWeeks(newDate(focusedDate), 1));
        break;

      case 'ArrowDown':
        setFocusedDate(addWeeks(newDate(focusedDate), 1));
        break;

      case ' ': // Spacebar
      case 'Enter':
        if (focusedDate && !dateIsDisabled(focusedDate)) {
          onSelectDate(focusedDate);
        }
        break;

      default:
        break;
    }
  };

  const handleFocus = (date: Date) => setFocusedDate(date);

  return { focusedDate, handleFocus, handleKeyPress };
};
