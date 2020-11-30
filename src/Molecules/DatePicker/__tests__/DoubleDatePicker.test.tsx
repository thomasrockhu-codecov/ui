import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { within } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { advanceTo, clear } from 'jest-date-mock';
import { format } from 'date-fns';
import { DatePicker } from '../../..';
import { PageProviders } from '../../../common/testUtils';
import { DOUBLE_DATE_PICKER } from '../shared/constants';

afterEach(cleanup);

beforeAll(() => {
  advanceTo(new Date(2020, 8, 29, 0, 0, 0));
});
afterAll(() => {
  clear();
});

const ID = 'double-datepicker';
const startInputId = 'datepicker-input-start';
const endInputId = 'datepicker-input-end';
const calendarsId = 'datepicker-calendars';

describe('Double date picker', () => {
  it('click to select a range on both calendars', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DatePicker id={ID} labelFrom="Label" onChange={onChange} variant={DOUBLE_DATE_PICKER} />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'October 8';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const calendars = getByTestId(calendarsId);

    const startDay = await within(calendars).findByTestId(expectedStart);
    const endDay = await within(calendars).findByTestId(expectedEnd);

    fireEvent.click(startDay);
    fireEvent.click(endDay);
    expect(onChange).toHaveNthReturnedWith(1, [expectedStart, null]);
    expect(onChange).toHaveNthReturnedWith(2, [expectedStart, expectedEnd]);
  });
  it('click to select a range on one calendar', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DatePicker id={ID} labelFrom="Label" onChange={onChange} variant={DOUBLE_DATE_PICKER} />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'September 8';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const calendars = getByTestId(calendarsId);

    const startDay = await within(calendars).findByTestId(expectedStart);
    const endDay = await within(calendars).findByTestId(expectedEnd);

    fireEvent.click(startDay);
    fireEvent.click(endDay);
    expect(onChange).toHaveNthReturnedWith(1, [expectedStart, null]);
    expect(onChange).toHaveNthReturnedWith(2, [expectedStart, expectedEnd]);
  });
  it('click first date and input second date', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DatePicker id={ID} labelFrom="Label" onChange={onChange} variant={DOUBLE_DATE_PICKER} />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'September 8';

    const startInput = getByTestId(startInputId);
    const endInput = getByTestId(endInputId);
    fireEvent.focus(startInput);

    const calendars = getByTestId(calendarsId);

    const startDay = await within(calendars).findByTestId(expectedStart);
    fireEvent.focus(endInput);

    fireEvent.click(startDay);
    expect(onChange).toHaveNthReturnedWith(1, [expectedStart, null]);

    fireEvent.change(endInput, { target: { value: '08/09/2020' } });
    fireEvent.keyDown(endInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveNthReturnedWith(2, [expectedStart, expectedEnd]);
  });
  it('input first date and click second date', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DatePicker id={ID} labelFrom="Label" onChange={onChange} variant={DOUBLE_DATE_PICKER} />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'September 8';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    fireEvent.change(startInput, { target: { value: '01/09/2020' } });
    fireEvent.keyDown(startInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveNthReturnedWith(1, [expectedStart, null]);

    const calendars = getByTestId(calendarsId);

    const endDay = await within(calendars).findByTestId(expectedEnd);

    fireEvent.click(endDay);

    expect(onChange).toHaveNthReturnedWith(2, [expectedStart, expectedEnd]);
  });
  it('use input for both dates', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DatePicker id={ID} labelFrom="Label" onChange={onChange} variant={DOUBLE_DATE_PICKER} />
      </PageProviders>,
    );

    const expectedStart = 'September 1';
    const expectedEnd = 'October 8';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);
    fireEvent.change(startInput, { target: { value: '01/09/2020' } });
    fireEvent.keyDown(startInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveNthReturnedWith(1, [expectedStart, null]);

    const endInput = getByTestId(endInputId);
    fireEvent.focus(endInput);
    fireEvent.change(endInput, { target: { value: '08/10/2020' } });
    fireEvent.keyDown(endInput, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveNthReturnedWith(2, [expectedStart, expectedEnd]);
  });
  it('use arrowkeys', async () => {
    const onChange = jest.fn((first: Date | null, second: Date | null) => {
      if (first && !second) return [format(first, 'MMMM d'), null];
      if (first && second) return [format(first, 'MMMM d'), format(second, 'MMMM d')];
      return [null, null];
    });

    const { getByTestId } = render(
      <PageProviders>
        <DatePicker id={ID} labelFrom="Label" onChange={onChange} variant={DOUBLE_DATE_PICKER} />
      </PageProviders>,
    );

    const expectedStart = 'September 7';
    const expectedEnd = 'September 8';
    const tempDate = 'August 31';

    const startInput = getByTestId(startInputId);
    fireEvent.focus(startInput);

    const calendars = getByTestId(calendarsId);
    const startDay = await within(calendars).findByTestId(expectedStart);
    const tempDay = await within(calendars).findByTestId(tempDate);
    const endDay = await within(calendars).findByTestId(expectedEnd);

    // focus 31 august
    fireEvent.keyDown(startInput, {
      key: 'ArrowDown',
      keyCode: 40,
    });
    // focus 7 september
    fireEvent.keyDown(tempDay, {
      key: 'ArrowDown',
      keyCode: 40,
    });
    // select
    fireEvent.keyDown(startDay, { key: 'Enter', code: 'Enter' });
    // focus 8 september
    fireEvent.keyDown(startDay, {
      key: 'ArrowRight',
      keyCode: 39,
    });
    // select
    fireEvent.keyDown(endDay, { key: 'Enter', code: 'Enter' });

    expect(onChange).toHaveNthReturnedWith(1, [expectedStart, null]);
    expect(onChange).toHaveNthReturnedWith(2, [expectedStart, expectedEnd]);
  });
});
