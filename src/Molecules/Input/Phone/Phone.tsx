import React, { useState } from 'react';
import * as R from 'ramda';
import { Props } from './Phone.types';
import { Box, Flag, Flexbox, FormField, Icon, Typography } from '../../..';
import { useSelectMachineFromContext } from '../Select/lib/context';
import { OptionItem } from '../Select/Select.types';
import { CountryCodeLabel } from './CountryCodeLabel';
import {
  StyledSelect,
  StyledCountryCode,
  StyledInput,
  StyledWrapper,
  StyledBox,
} from './Phone.styled';

const hasError = (error?: Props['error']) => error && error !== '';

const components = {
  StyledInput,
};

const getAriaProps = R.pickBy((val, key) => key.startsWith('aria-'));
const getDataProps = R.pickBy((val, key) => key.startsWith('data-'));

const PhoneComponent = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    autoComplete,
    autoFocus,
    defaultValue,
    disabled,
    error,
    id,
    maxLength,
    name,
    onBlur,
    onChange = () => {},
    onClick,
    onFocus,
    onMouseLeave,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    placeholder,
    required,
    variant = 'normal',
    size,
    success,
    value,
    visuallyEmphasiseRequired,
    type,
  } = props;

  const options = [
    {
      label: <CountryCodeLabel countryCode="se" prefixCode="+46" />,
      value: '46',
      flag: <Flag country="se" height={3} />,
    },
    {
      label: <CountryCodeLabel countryCode="dk" prefixCode="+45" />,
      value: '45',
      flag: <Flag country="dk" height={3} />,
    },
    {
      label: <CountryCodeLabel countryCode="no" prefixCode="+47" />,
      value: '47',
      flag: <Flag country="no" height={3} />,
    },
    {
      label: <CountryCodeLabel countryCode="fi" prefixCode="+385" />,
      value: '385',
      flag: <Flag country="fi" height={3} />,
    },
    {
      label: (
        <Flexbox container alignItems="center" gutter={3}>
          <Flexbox item>
            <Icon.Globe size={3} />
          </Flexbox>
          <Flexbox item>
            <Typography type="secondary">+</Typography>
          </Flexbox>
        </Flexbox>
      ),
      value: '',
      flag: <Icon.Globe size={3} />,
    },
  ];

  // @ts-ignore
  const CountryCodeListItem = ({ index }) => {
    const [state] = useSelectMachineFromContext();
    const option = state.context.options[index];
    const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');
    const focused = isKeyboardNavigation && state.context.itemFocusIdx === index;

    return (
      <StyledBox px={2} py={1} focused={focused} isKeyboardNavigation={isKeyboardNavigation}>
        <Flexbox container width="100%">
          {option.label}
        </Flexbox>
      </StyledBox>
    );
  };

  const CountryCodeValue = () => {
    const [state] = useSelectMachineFromContext();

    const selectedOption =
      state.context.selectedItems.length === 0 ? null : state.context.selectedItems[0];

    return (
      <Flexbox container alignItems="center" justifyContent="center">
        <Box pl={2}>{selectedOption.flag}</Box>
      </Flexbox>
    );
  };

  const [countryCode, setCountryCode] = useState<OptionItem[]>([options[0]]);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const changeCountryCode = (vals: OptionItem[]) => {
    const { value: newValue } = vals[0];
    setCountryCode(vals);
    onChange(`+${newValue}${phoneNumber}`);
  };

  const changePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target;
    setPhoneNumber(newValue);
    onChange(`+${countryCode[0].value}${newValue}`);
  };

  return (
    <FormField
      {...R.pick(
        [
          'error',
          'extraInfo',
          'hideLabel',
          'label',
          'labelTooltip',
          'labelTooltipPosition',
          'className',
          'width',
          'disabled',
        ],
        props,
      )}
      required={visuallyEmphasiseRequired}
    >
      <StyledWrapper
        container
        alignItems="stretch"
        {...R.pick(['error', 'success', 'disabled', 'variant'], props)}
      >
        <StyledSelect
          label="country code"
          hideLabel
          disabled={disabled}
          options={options}
          components={{
            ListItem: CountryCodeListItem,
            SelectedValue: CountryCodeValue,
          }}
          value={countryCode}
          onChange={changeCountryCode}
          listWidth="80px"
          id="phone-input-country-code-selector"
        />
        <StyledCountryCode container alignItems="center" disabled={disabled}>
          <Typography type="secondary" color={(t) => t.color[disabled ? 'label' : 'text']}>
            +{countryCode[0].value}
          </Typography>
        </StyledCountryCode>
        <StyledInput
          onChange={changePhoneNumber}
          {...{
            autoComplete,
            autoFocus,
            defaultValue,
            disabled,
            error,
            id,
            maxLength,
            name,
            onBlur,
            onClick,
            onFocus,
            onMouseLeave,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            placeholder,
            required,
            variant,
            size,
            success,
            value,
            type,
            ref,
          }}
          {...getAriaProps(props)}
          {...getDataProps(props)}
          {...(hasError(error) ? { 'aria-invalid': true } : {})}
        />
      </StyledWrapper>
    </FormField>
  );
});

export const Phone: typeof PhoneComponent & {
  components?: typeof components;
} = PhoneComponent;
Phone.components = components;
