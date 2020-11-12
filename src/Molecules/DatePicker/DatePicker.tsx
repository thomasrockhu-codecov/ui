import React, { useRef, useState, useCallback, useEffect, SyntheticEvent } from 'react';
import styled, { useTheme } from 'styled-components';
import format from 'date-fns/format';
import { useIntl } from 'react-intl';
import { closestTo, isAfter, isSameDay, startOfDay } from 'date-fns';
import { Props } from './DatePicker.types';

/**
 * Imported seperately because when imported in src/index.ts, Input will not have been imported yet and an error will be thrown
 */
import Input from '../Input';
import { Box, Icon, DropdownBubble, Button } from '../..';
import { assert, isUndefined } from '../../common/utils';
import { useOnClickOutside } from '../../common/Hooks';
import { newDate, getLocale, getDateFormat, parseDateString } from './shared/dateUtils';
import Header from './Header';
import Calendar from './Calendar';
import { RANGE_DATE_PICKER, REGULAR_DATE_PICKER } from './shared/constants';

const StyledInputText = styled(Input.Text)`
  z-index: 1;
`;

const StyledDropdownBubble = styled(DropdownBubble)`
  max-width: ${({ theme }) => theme.spacing.unit(78)}px;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  top: -10px;
  &:after,
  &:before {
    display: none;
  }
`;

const StyledDropdownBubbleWrapper = styled.div`
  position: absolute;
`;

export const DatePicker = (React.forwardRef<HTMLDivElement, Props>((props, ref) => {
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
    selectedDate: selectedDateProp,
    selectedEndDate: selectedEndDateProp,
    variant = REGULAR_DATE_PICKER,
    width = 78,
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

  const theme = useTheme();
  const { locale } = useIntl();
  const dateFormat = getDateFormat(locale);

  const options = {
    locale: getLocale(locale),
  };

  const initialInputValue = selectedDateProp ? format(selectedDateProp, dateFormat, options) : '';

  const [open, setOpen] = useState<boolean>(openProp);
  const [viewedDate, setViewedDate] = useState<Date>(selectedDateProp || startOfDay(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(selectedDateProp || null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(selectedEndDateProp || null);
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  const handleDateClickRegular = useCallback(
    (date: Date) => {
      setInputValue(format(date, dateFormat, options));
      setSelectedDate(date);
      setOpen(false);

      if (onChange) onChange(date);
    },
    [dateFormat, onChange, options],
  );

  const handleDateClickRange = useCallback(
    (date: Date) => {
      const [startDate, endDate] = ((): [Date, Date | null] => {
        if (!selectedDate) return [date, null];

        const swapDate = !selectedEndDate && !isAfter(date, selectedDate);
        const moveSelectedDate =
          selectedEndDate &&
          isSameDay(selectedDate, closestTo(date, [selectedEndDate, selectedDate]));

        if (swapDate) return [date, selectedDate];
        if (moveSelectedDate) return [date, selectedEndDate];
        return [selectedDate, date];
      })();

      if (endDate && isSameDay(startDate, endDate)) return;
      if (
        selectedDate &&
        isSameDay(startDate, selectedDate) &&
        endDate &&
        selectedEndDate &&
        isSameDay(endDate, selectedEndDate)
      )
        return;

      const rangeDateString = !endDate
        ? `${format(startDate, dateFormat, options)} - `
        : `${format(startDate, dateFormat, options)} - ${format(endDate, dateFormat, options)}`;

      setSelectedDate(startDate);
      setSelectedEndDate(endDate);
      setInputValue(rangeDateString);

      if (onChange) onChange(startDate, endDate);
    },
    [selectedDate, dateFormat, options, onChange, selectedEndDate],
  );

  const onDateClick = useCallback(
    (date: Date) => {
      if (variant === REGULAR_DATE_PICKER) handleDateClickRegular(date);
      else handleDateClickRange(date);
    },
    [variant, handleDateClickRegular, handleDateClickRange],
  );

  const handleInputSubmitRegular = useCallback(
    (dateString: string) => {
      const date = parseDateString(dateString, locale);
      if (!date) return;
      if (selectedDate && isSameDay(date, selectedDate)) return;

      setInputValue(format(date, dateFormat, options));
      setSelectedDate(date);
      setViewedDate(newDate(date));

      if (onChange) onChange(date);
    },
    [dateFormat, locale, onChange, options, selectedDate],
  );

  const handleInputSubmitRange = useCallback(
    (dateString: string) => {
      const [startDateString, endDateString] = dateString.split(' - ');
      const [startDate, endDate] = (() => {
        const parsedStartDate = parseDateString(startDateString, locale);
        const parsedEndDate = parseDateString(endDateString, locale);

        if (parsedStartDate && parsedEndDate)
          return parsedStartDate < parsedEndDate
            ? [parsedStartDate, parsedEndDate]
            : [parsedEndDate, parsedStartDate];

        return [parsedStartDate, parsedEndDate];
      })();

      if (startDate && !endDate) {
        const selectedDateReselected = selectedDate && isSameDay(startDate, selectedDate);

        if (selectedDateReselected) return;

        setSelectedDate(startDate);
        setSelectedEndDate(endDate);
        setViewedDate(newDate(startDate));

        if (onChange) onChange(startDate, endDate);
      } else if (startDate && endDate) {
        const selectedDatesReselected =
          selectedDate &&
          selectedEndDate &&
          isSameDay(startDate, selectedDate) &&
          isSameDay(endDate, selectedEndDate);

        if (isSameDay(startDate, endDate)) return;
        if (selectedDatesReselected) return;

        const rangeDateString = `${format(startDate, dateFormat, options)} - ${format(
          endDate,
          dateFormat,
          options,
        )}`;

        setSelectedDate(startDate);
        setSelectedEndDate(endDate);
        setViewedDate(newDate(endDate));

        setInputValue(rangeDateString);

        if (onChange) onChange(startDate, endDate);
      }
    },
    [locale, selectedDate, onChange, selectedEndDate, dateFormat, options],
  );

  const onInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      if (variant === RANGE_DATE_PICKER) handleInputSubmitRange(value);
      else handleInputSubmitRegular(value);
    }
  };

  const handleInputOnFocus = useCallback(() => setOpen(true), [setOpen]);

  const handleInputOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  }, []);

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
    <Box my={3} mx={2}>
      <Header
        ariaLabelPrevious={ariaLabelPrevious}
        ariaLabelNext={ariaLabelNext}
        id={id}
        viewedDate={viewedDate}
        locale={locale}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
      />
      <Calendar
        disableDate={disableDate}
        enableDate={enableDate}
        viewedDate={viewedDate}
        locale={locale}
        onClick={onDateClick}
        selectedDate={selectedDate as Date}
        selectedEndDate={selectedEndDate as Date}
      />
    </Box>
  );

  const inputLeftAddon = open ? (
    <Button
      variant="neutral"
      type="button"
      onClick={(e: SyntheticEvent) => {
        // prevent default to avoid triggering focus on the input element
        e.preventDefault();
        setOpen(false);
      }}
    >
      <Icon.CrossThin size={3} />
    </Button>
  ) : null;
  const inputRightAddon = <Icon.CalendarTwoRows size={6} />;

  const selfRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selfRef, () => setOpen(false));

  return (
    <div ref={(ref || selfRef) as React.Ref<HTMLDivElement>}>
      <StyledInputText
        size={inputSize}
        label={label}
        disabled={disabled}
        id={id}
        data-testid="datepicker-input"
        placeholder={
          variant === REGULAR_DATE_PICKER
            ? dateFormat.toLowerCase()
            : `${dateFormat.toLowerCase()} - ${dateFormat.toLowerCase()}`
        }
        value={inputValue}
        leftAddon={inputLeftAddon}
        rightAddon={inputRightAddon}
        onChange={handleInputOnChange}
        onKeyDown={onInputSubmit}
        onFocus={handleInputOnFocus}
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
