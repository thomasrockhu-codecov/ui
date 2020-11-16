import React, { useCallback } from 'react';
import styled from 'styled-components';
import { format, isToday } from 'date-fns';
import { Box, Typography } from '../../..';
import { EdgeDay, CalendarDayProps } from './Calendar.types';
import { FIRST_DAY, LAST_DAY } from './constants';

const StyledCalendarDay = styled(Box)<{
  $disabled?: boolean;
  $selected?: boolean;
  $withinRange?: boolean;
  $isToday?: boolean;
  $isSameMonth?: boolean;
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
  ${
    $disabled
      ? `cursor: not-allowed;
        background: ${theme.color.shadowInput};

        &:focus {
          outline: none;
          border: 1px solid ${theme.color.inputBorder};
        }`
      : `
      &:focus {
        outline: none;
        border: 1px solid ${theme.color.cta};
      }

      &:hover {
        border: 1px solid ${theme.color.cta};
      }`
  }
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
  ${$isToday ? `border: 1px solid ${theme.color.label};` : ''}
  ${$selected ? `background: ${theme.color.cta};` : ''}
`}
`;

export const CalendarDay = React.forwardRef<HTMLDivElement, CalendarDayProps>(
  (
    {
      onFocus,
      className = '',
      date,
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
      if (!sameMonth && !selected) return 'otherMonthDateText';
      if (disabled) return 'disabledText';
      if (selected) return 'buttonText';
      if (!selected) return 'text';
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
        ref={ref}
        className={className}
        $disabled={disabled}
        $selected={selected}
        $withinRange={withinRange}
        $isToday={isToday(date)}
        $isSameMonth={sameMonth}
        $edgeDay={edgeDay}
        onClick={handleOnClick}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0} // should not be focusable if disabled
      >
        <Typography type="tertiary" color={(t) => t.color[textColor || 'text']}>
          {format(date, 'd')}
        </Typography>
      </StyledCalendarDay>
    );
  },
);
