import React, { useCallback } from 'react';
import styled from 'styled-components';
import { format, isToday } from 'date-fns';
import { Box, Typography } from '../../..';
import { CalendarDayProps } from './Calendar.types';

const StyledCalendarDay = styled(Box)<{
  $disabled?: boolean;
  $selected?: boolean;
  $withinRange?: boolean;
  $isToday?: boolean;
  $isSameMonth?: boolean;
  $isFirstDay?: boolean;
  $isLastDay?: boolean;
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

  ${({ $disabled, $selected, $withinRange, $isToday, $isFirstDay, $isLastDay, theme }) => `
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
    $withinRange && $isFirstDay
      ? `background: linear-gradient(to right, ${theme.color.backgroundInput} 10%, ${theme.color.datePickerWithinRangeBackground});`
      : ''
  }
  ${
    $withinRange && $isLastDay
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
      isFirstDay = false,
      isLastDay = false,
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
        $isFirstDay={isFirstDay}
        $isLastDay={isLastDay}
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
