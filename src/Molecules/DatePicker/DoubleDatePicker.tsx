import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import format from 'date-fns/format';
import { useIntl } from 'react-intl';
import { isBefore, isSameDay, startOfDay } from 'date-fns';
import { Props } from './DoubleDatePicker.types';

/**
 * Imported seperately because when imported in src/index.ts, Input will not have been imported yet and an error will be thrown
 */
import Input from '../Input';
import { Box, Icon, DropdownBubble } from '../..';
import { assert, isUndefined } from '../../common/utils';
import { useOnClickOutside } from '../../common/Hooks';
import { newDate, getLocale, getDateFormat, parseDateString } from './shared/dateUtils';

import { DoubleHeader } from './Header';
import { DoubleCalendar } from './Calendar';

const INPUT_SPACING = 4;

const StyledInputTextRight = styled(Input.Text)`
  z-index: 1;
  padding-left: ${({ theme }) => theme.spacing.unit(INPUT_SPACING / 2)}px;
`;
const StyledInputTextLeft = styled(Input.Text)`
  z-index: 1;
  padding-right: ${({ theme }) => theme.spacing.unit(INPUT_SPACING / 2)}px;
`;

const StyledDropdownBubble = styled(DropdownBubble)`
  width: ${({ theme }) => theme.spacing.unit(156 + INPUT_SPACING)}px;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  box-sizing: border-box;
  top: -10px;
  &:after,
  &:before {
    display: none;
  }
`;

const StyledDropdownBubbleWrapper = styled.div`
  position: absolute;
`;

export const DoubleDatePicker = (React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    ariaLabelPrevious,
    ariaLabelNext,
    onChange,
    label,
    disabled,
    disableDate,
    enableDate,
    id,
    open: openProp = false,
    selectedStartDate: selectedStartDateProp,
    selectedEndDate: selectedEndDateProp,
    inputValueStart: inputValueStartProp,
    inputValueEnd: inputValueEndProp,
    width = 78,
    yearSelectLength,
    inputSize,
  } = props;

  assert(Boolean(props.id), `DatePicker: "id" is required.`);

  if (disableDate) {
    assert(
      isUndefined(enableDate),
      `DatePicker: "enableDate" cannot be used at the same time as "disableDate".`,
    );
  }

  if (enableDate) {
    assert(
      isUndefined(disableDate),
      `DatePicker: "disableDate" cannot be used at the same time as "enableDate".`,
    );
  }

  const INPUT_ID_START = `${id}-start`;
  const INPUT_ID_END = `${id}-end`;

  const theme = useTheme();
  const { locale } = useIntl();
  const dateFormat = getDateFormat(locale);

  const options = useMemo(
    () => ({
      locale: getLocale(locale),
    }),
    [locale],
  );

  const [open, setOpen] = useState<boolean>(openProp);
  const [viewedDate, setViewedDate] = useState<Date>(
    (selectedStartDateProp && new Date(selectedStartDateProp)) || startOfDay(new Date()),
  );
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    selectedStartDateProp || null,
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(selectedEndDateProp || null);
  const [inputValueStart, setInputValueStart] = useState<string>(inputValueStartProp || '');
  const [inputValueEnd, setInputValueEnd] = useState<string>(inputValueEndProp || '');

  const focusedState = useState<[number | null, number | null]>([null, null]);
  const setFocused = focusedState[1];

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  useEffect(() => {
    if (selectedStartDateProp) setSelectedStartDate(selectedStartDateProp);
    if (selectedEndDateProp) setSelectedEndDate(selectedEndDateProp);

    if (inputValueStartProp) {
      setInputValueStart(inputValueStartProp);
    } else {
      const controlledInputValue = (() => {
        if (selectedStartDateProp) {
          return format(selectedStartDateProp, dateFormat, options);
        }
        return '';
      })();

      setInputValueStart(controlledInputValue);
    }

    if (inputValueEndProp) {
      setInputValueEnd(inputValueEndProp);
    } else {
      const controlledInputValue = (() => {
        if (selectedEndDateProp) {
          return format(selectedEndDateProp, dateFormat, options);
        }
        return '';
      })();

      setInputValueEnd(controlledInputValue);
    }
  }, [
    dateFormat,
    options,
    selectedStartDateProp,
    selectedEndDateProp,
    inputValueStartProp,
    inputValueEndProp,
  ]);

  useEffect(() => {
    if (!inputValueStart) {
      setSelectedStartDate(null);
    }
    if (!inputValueEnd) {
      setSelectedEndDate(null);
    }
  }, [inputValueEnd, inputValueStart]);

  const handleDateClickRange = useCallback(
    (date: Date) => {
      const [startDate, endDate] = ((): [Date, Date | null] => {
        if (!selectedStartDate) return [date, null];

        if (selectedStartDate && isBefore(date, selectedStartDate)) return [date, selectedEndDate];
        const swapDate = !selectedEndDate && isBefore(date, selectedStartDate);
        if (swapDate) return [date, selectedStartDate];
        if (selectedStartDate && isSameDay(date, selectedStartDate)) return [date, null];
        if (selectedStartDate && selectedEndDate && isSameDay(date, selectedEndDate))
          return [date, null];
        if (selectedStartDate) return [selectedStartDate, date];

        return [selectedStartDate, date];
      })();

      if (endDate && isSameDay(startDate, endDate)) return;
      if (
        selectedStartDate &&
        isSameDay(startDate, selectedStartDate) &&
        endDate &&
        selectedEndDate &&
        isSameDay(endDate, selectedEndDate)
      )
        return;

      const rangeDateStringStart = `${format(startDate, dateFormat, options)}`;
      const rangeDateStringEnd = endDate ? `${format(endDate, dateFormat, options)}` : '';

      setSelectedStartDate(startDate);
      setSelectedEndDate(endDate);
      setInputValueStart(rangeDateStringStart);
      setInputValueEnd(rangeDateStringEnd);

      if (onChange) onChange(startDate, endDate);
    },
    [selectedStartDate, dateFormat, options, onChange, selectedEndDate],
  );

  const onDateClick = useCallback(
    (date: Date) => {
      handleDateClickRange(date);
    },
    [handleDateClickRange],
  );

  const allowedDate = useCallback(
    (date: Date | null) => {
      if (date && disableDate && disableDate(date)) return null;
      if (date && enableDate && !enableDate(date)) return null;
      return date;
    },
    [disableDate, enableDate],
  );

  const handleInputSubmit = useCallback(() => {
    const parsedStartDate = parseDateString(inputValueStart, locale);
    const parsedEndDate = parseDateString(inputValueEnd, locale);
    const startDate = allowedDate(parsedStartDate);
    const endDate = allowedDate(parsedEndDate);
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
    if (onChange) onChange(startDate, endDate);
  }, [allowedDate, inputValueEnd, inputValueStart, locale, onChange]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowLeft':
        if (!inputValueEnd) setFocused([0, 0]);
        break;

      case 'Enter':
        handleInputSubmit();
        break;

      default:
        break;
    }
  };

  const handleInputOnFocus = useCallback(() => setOpen(true), [setOpen]);

  const handleInputOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, id: elementId } = event.target;
      if (elementId === INPUT_ID_START) {
        setInputValueStart(value);
      } else if (elementId === INPUT_ID_END) {
        setInputValueEnd(value);
      }
    },
    [INPUT_ID_END, INPUT_ID_START],
  );

  const onMonthChange = useCallback(
    (index: number) => {
      viewedDate.setMonth(index);
      setViewedDate(newDate(viewedDate));
    },
    [viewedDate, setViewedDate],
  );

  const onYearChange = useCallback(
    (year: number) => {
      viewedDate.setFullYear(year);
      setViewedDate(newDate(viewedDate));
    },
    [viewedDate, setViewedDate],
  );

  const datepicker = (
    <Box
      my={3}
      mx={2}
      onBlur={() => {
        setFocused([null, null]);
      }}
    >
      <DoubleHeader
        ariaLabelPrevious={ariaLabelPrevious}
        ariaLabelNext={ariaLabelNext}
        id={id}
        viewedDate={viewedDate}
        locale={locale}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
        yearSelectLength={yearSelectLength}
      />
      <DoubleCalendar
        disableDate={disableDate}
        enableDate={enableDate}
        viewedDate={viewedDate}
        locale={locale}
        onClick={onDateClick}
        selectedStartDate={selectedStartDate as Date}
        selectedEndDate={selectedEndDate as Date}
        focusedState={focusedState}
        setViewedDate={() => ({})}
      />
    </Box>
  );

  const inputRightAddon = <Icon.CalendarTwoRows size={6} />;

  const selfRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selfRef, () => {
    setFocused([null, null]);
    setOpen(false);
  });

  return (
    <div ref={(ref || selfRef) as React.Ref<HTMLDivElement>}>
      <StyledInputTextLeft
        size={inputSize}
        label={label}
        disabled={disabled}
        id={INPUT_ID_START}
        data-testid="datepicker-input-start"
        placeholder={dateFormat.toLowerCase()}
        value={inputValueStart}
        rightAddon={inputRightAddon}
        onChange={handleInputOnChange}
        onKeyDown={handleInputKeyDown}
        onFocus={handleInputOnFocus}
        onBlur={handleInputSubmit}
        width={width ? `${theme.spacing.unit(width)}px` : ''}
        autoComplete="off"
      />
      <StyledInputTextRight
        size={inputSize}
        label={label}
        disabled={disabled}
        id={INPUT_ID_END}
        data-testid="datepicker-input-end"
        placeholder={dateFormat.toLowerCase()}
        value={inputValueEnd}
        rightAddon={inputRightAddon}
        onChange={handleInputOnChange}
        onKeyDown={handleInputKeyDown}
        onFocus={handleInputOnFocus}
        onBlur={handleInputSubmit}
        width={width ? `${theme.spacing.unit(width)}px` : ''}
        autoComplete="off"
      />
      {open ? (
        <StyledDropdownBubbleWrapper>
          <StyledDropdownBubble>{datepicker}</StyledDropdownBubble>
        </StyledDropdownBubbleWrapper>
      ) : null}
    </div>
  );
}) as any) as React.FC<Props> & {};
