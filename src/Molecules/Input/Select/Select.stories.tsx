/** eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { action } from '@storybook/addon-actions';
import R from 'ramda';
import styled from 'styled-components';
import { Input, Avatar, Flexbox, Number, Typography, Box, Icon, Link } from '../../..';
import { Display } from '../../../common/Display';
import mdx from './Select.mdx';
/* eslint-disable react-hooks/rules-of-hooks */
const useSelectMachineFromContext = Input.Select.useSelectMachineFromContext;

const FlexedBox = styled(Box)`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const AccountValue = () => {
  const [state] = useSelectMachineFromContext();

  const selectedOption =
    state.context.selectedItems.length === 0 ? null : state.context.selectedItems[0];

  return (
    <FlexedBox px={2} pr={8}>
      {!selectedOption ? (
        state.context.placeholder
      ) : (
        <Flexbox container item justifyContent="space-between" gutter={2} grow={1}>
          <Flexbox item container alignItems="center" basis="32px" grow={0}>
            <Avatar size="s">{selectedOption.symbol}</Avatar>
          </Flexbox>
          <Flexbox item container alignItems="center" grow={1}>
            <Typography type="tertiary" weight="bold" color={t => t.color.text}>
              {selectedOption.label}
            </Typography>
            <Typography type="tertiary">
              <span aria-hidden="true">&nbsp;&#8231;&nbsp;</span>
              {selectedOption.accno}
            </Typography>
          </Flexbox>
        </Flexbox>
      )}
    </FlexedBox>
  );
};

const StyledBox = styled(Box)<{ focused: boolean }>`
  cursor: pointer;
  background: ${p => (p.focused ? p.theme.color.background : p.theme.color.card)};
  ${p =>
    !p.isKeyboardNavigation
      ? `
  &: hover {
    background: ${p.theme.color.background};
    }
  `
      : ''}
`;

const AccountListItem = ({ index, isKeyboardNavigation }: any, ref) => {
  const [state] = useSelectMachineFromContext();
  const option = state.context.options[index];
  const selected = state.context.selectedItems.includes(option);
  const focused = isKeyboardNavigation && state.context.itemFocusIdx === index;
  return (
    <StyledBox
      px={2}
      py={1}
      focused={focused}
      isKeyboardNavigation={isKeyboardNavigation}
      ref={ref}
    >
      <Flexbox container justifyContent="space-between" gutter={4}>
        <Flexbox item container alignItems="center" basis="32px" grow={0}>
          <Avatar size="s">{option.symbol}</Avatar>
        </Flexbox>
        <Flexbox item container direction="column" grow={1}>
          <Flexbox item>
            <Typography type="tertiary" weight="bold" color={t => t.color.text}>
              {option.label}
            </Typography>
            <Typography type="tertiary">
              <span aria-hidden="true">&nbsp;&#8231;&nbsp;</span>
              {option.accno}
            </Typography>
          </Flexbox>
          <Flexbox item>
            <Typography type="caption" color={t => t.color.text}>
              <Number value={option.amount.value} currency={option.amount.currency} />
            </Typography>
          </Flexbox>
        </Flexbox>
        {selected && (
          <Flexbox item container alignItems="center">
            <Box pl={2}>
              <Icon.CheckMark color={t => t.color.cta} size={4} />
            </Box>
          </Flexbox>
        )}
      </Flexbox>
    </StyledBox>
  );
};

export const defaultStory = () => (
  <Input.Select
    id="input-1"
    options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
    label="Label"
    placeholder="Placeholder"
  />
);
export const overflowStory = () => (
  <Input.Select
    id="input-1"
    options={new Array(100).fill(null).map((_, i) => ({
      value: i,
      label: `${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`,
    }))}
    label="LabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabelLabel"
    placeholder="PlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholderPlaceholder"
  />
);

export const preselectedOptions = () => {
  // This component you need to redefine for your particular case
  // Consider translations and a11y!
  const CustomSelectedValue = React.useCallback(() => {
    const [machineState] = useSelectMachineFromContext();
    const selectedCount = machineState.context.selectedItems.length;
    return (
      <FlexedBox px={2}>
        <Typography type="secondary">
          {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
        </Typography>
      </FlexedBox>
    );
  }, []);

  const [values, setValues] = React.useState([
    // Non-referentially equal options
    { ...accountOptions[1] },
    { ...accountOptions[2] },
  ]);

  return (
    <Input.Select
      id="input-1"
      options={accountOptions}
      value={values}
      onChange={setValues}
      components={{ SelectedValue: CustomSelectedValue }}
      multiselect
      label="Label"
      placeholder="Placeholder"
    />
  );
};

export const multiSelectUncontrolled = () => {
  // This component you need to redefine for your particular case
  // Consider translations and a11y!
  const CustomSelectedValue = React.useCallback(() => {
    const [machineState] = useSelectMachineFromContext();
    const selectedCount = machineState.context.selectedItems.length;
    return (
      <FlexedBox px={2}>
        <Typography type="secondary">
          {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
        </Typography>
      </FlexedBox>
    );
  }, []);

  return (
    <Input.Select
      id="input-1"
      options={accountOptions}
      components={{ SelectedValue: CustomSelectedValue }}
      multiselect
      label="Label"
      placeholder="Placeholder"
    />
  );
};

export const searchStory = () => (
  <Input.Select
    id="input-1"
    options={[
      { value: 1, label: 'Abba' },
      { value: 2, label: 'Btoiwent' },
      { value: 3, label: 'Crtetyrh' },
      { value: 4, label: 'Dositenyoe' },
      { value: 5, label: 'Dasitenyoe' },
      { value: 6, label: 'Xfoteibnyo' },
      { value: 7, label: '3125236' },
    ]}
    label="Label"
    placeholder="Placeholder"
  />
);

export const two = () => (
  <>
    <Input.Select
      id="input-1"
      options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
      label="Label"
      placeholder="Placeholder"
    />
    <Input.Select
      id="input-2"
      options={[{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }]}
      label="Label"
      placeholder="Placeholder"
    />
  </>
);

const accountOptions = [
  {
    label: 'First account',
    value: '1',
    symbol: 'AF',
    accno: '123',
    amount: { value: 212, currency: 'SEK' },
  },
  {
    label: 'Second acc 2',
    value: '2',
    symbol: '-',
    accno: '123',
    amount: { value: 111, currency: 'SEK' },
  },
  {
    label: 'Third 3',
    value: '3',
    symbol: 'ISK',
    accno: '123',
    amount: { value: 1, currency: 'DKK' },
  },
];

export const fullWidth = () => (
  <Input.Select
    id="onchange-select"
    fullWidth
    options={accountOptions}
    label="User account"
    placeholder="Select account"
  />
);

export const autoFocus = () => (
  <Input.Select
    id="onchange-select"
    autoFocus
    options={accountOptions}
    label="User account"
    placeholder="Select account"
  />
);

export const disabledItems = () => {
  return (
    <Input.Select
      id="onchange-select"
      options={accountOptions.map((acc, i) =>
        i === 1 || i === 2 ? { ...acc, disabled: true } : acc,
      )}
      label="User account"
      placeholder="Select account"
    />
  );
};

export const customRenderers = () => {
  return (
    <Input.Select
      id="custom-renderers-select"
      options={accountOptions}
      components={{
        ListItem: AccountListItem,
        SelectedValue: AccountValue,
      }}
      label="User account"
      placeholder="Select account"
    />
  );
};

export const onBlurAndOnFocus = () => {
  return (
    <Input.Select
      id="custom-renderers-select"
      options={accountOptions}
      label="User account"
      placeholder="Select account"
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  );
};

export const multiselect = () => {
  const [value, setValue] = React.useState([]);

  // This component you need to redefine for your particular case
  // Consider translations and a11y!
  const CustomSelectedValue = React.useMemo(
    () => () => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      return (
        <FlexedBox px={2}>
          <Typography type="secondary">
            {selectedCount === 0 ? machineState.context.placeholder : `${selectedCount} selected`}
          </Typography>
        </FlexedBox>
      );
    },
    [],
  );
  return (
    <Input.Select
      id="custom-renderers-select"
      options={accountOptions}
      value={value}
      onChange={setValue}
      components={{ SelectedValue: CustomSelectedValue }}
      multiselect
      label="User account"
      placeholder="Select account"
    />
  );
};

const accountOptionsAndSelectAll = [
  {
    label: 'Select All',
    value: undefined,
    all: true,
  },
]
  .concat(accountOptions)
  .concat({ label: 'Disabled', value: 'Doesnt matter', disabled: true });

export const multiselectSelectAll = () => {
  const [value, setValue] = React.useState([]);

  // This component you need to redefine for your particular case
  // Consider translations and a11y!
  const CustomSelectedValue = React.useMemo(
    () => () => {
      const [machineState] = useSelectMachineFromContext();
      const selectedCount = machineState.context.selectedItems.length;
      const allSelected = machineState.context.selectedItems.some(x => x.all);
      return (
        <FlexedBox px={2}>
          <Typography type="secondary">
            {allSelected
              ? 'All selected'
              : selectedCount === 0
              ? machineState.context.placeholder
              : `${selectedCount} selected`}
          </Typography>
        </FlexedBox>
      );
    },
    [],
  );
  return (
    <Input.Select
      id="multiwithall-select"
      options={accountOptionsAndSelectAll}
      value={value}
      onChange={setValue}
      components={{
        SelectedValue: CustomSelectedValue,
      }}
      multiselect
      label="User account"
      placeholder="Select account"
    />
  );
};

export const changesFromProps = () => {
  const [accs, setAccs] = React.useState(accountOptions);
  const [value, setValue] = React.useState([]);
  const [disabled, setDisabled] = React.useState(false);
  const removeAcc = () => setAccs(accs.slice(0, -1));
  const selectFirst = () => setValue([accountOptions[0]]);

  console.log('value in story:', value);
  return (
    <>
      <button onClick={removeAcc}>Delete</button>
      <button onClick={selectFirst}>Select first</button>
      <button onClick={() => setDisabled(true)}>Disable</button>
      <button onClick={() => setDisabled(false)}>Enable</button>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <pre>{JSON.stringify(accs, null, 2)}</pre>
      <Input.Select
        id="onchange-select"
        value={value}
        disabled={disabled}
        onChange={setValue}
        options={accs}
        label="User account"
        placeholder="Select account"
      />
    </>
  );
};

export const accessibleFromDocumentForms = () => {
  const FORM_NAME = 'testForm';
  const SELECT_NAME = 'mySelect';

  // @ts-ignore
  const [_, forceUpdate] = React.useState([]); // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <form name={FORM_NAME}>
      <Input.Select
        id="forms-input-test"
        options={accountOptions}
        name={SELECT_NAME}
        label="User account"
        placeholder="Select account"
        // Every time the value updates
        // The story gonna rerender
        // So we have fresh stuff from document.forms
        // @ts-ignore
        onChange={forceUpdate}
      />
      <br />
      Value in form: &quot;
      {R.path(['forms', FORM_NAME, 'elements', SELECT_NAME, 'value'])(document)}&quot;
    </form>
  );
};

export const controlledBehaviour = () => {
  const [value, setValue] = React.useState(() => [accountOptions[1]]);
  const onChange = newValue => setValue(newValue);
  return (
    <Input.Select
      id="onchange-select"
      options={accountOptions}
      value={value}
      onChange={onChange}
      label="User account"
      placeholder="Select account"
    />
  );
};
controlledBehaviour.story = {
  name: 'Controlled behaviour',
};

export const defaultVariations = () => {
  return (
    <Display
      items={[
        {
          title: 'Disabled',
          component: (
            <Input.Select
              id="disabled-select"
              options={accountOptions}
              label="User account"
              disabled
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Error',
          component: (
            <Input.Select
              options={accountOptions}
              id="error-select"
              label="User account"
              error="Some error"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Info',
          component: (
            <Input.Select
              options={accountOptions}
              id="info-select"
              label="User account"
              extraInfo="Some extra info"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Success',
          component: (
            <Input.Select
              id="success-select"
              options={accountOptions}
              label="User account"
              success
              placeholder="Select account"
            />
          ),
        },
      ]}
    />
  );
};

defaultVariations.story = {
  name: 'Default variations',
};
export const sizeS = () => {
  return (
    <Display
      items={[
        {
          title: 'Disabled',
          component: (
            <Input.Select
              size="s"
              id="disabled-select"
              options={accountOptions}
              label="User account"
              disabled
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Error',
          component: (
            <Input.Select
              size="s"
              id="error-select"
              options={accountOptions}
              label="User account"
              error="Some error"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Info',
          component: (
            <Input.Select
              size="s"
              id="info-select"
              options={accountOptions}
              label="User account"
              extraInfo="Some extra info"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Success',
          component: (
            <Input.Select
              size="s"
              id="success-select"
              options={accountOptions}
              label="User account"
              success
              placeholder="Select account"
            />
          ),
        },
      ]}
    />
  );
};

export const linkWithDropdownAndSearchBox = () => {
  const customComponents = React.useMemo(
    () => ({
      SelectedValue: (_: any, ref: React.Ref<any>) => {
        const [state] = useSelectMachineFromContext();

        return (
          <Link ref={ref} as="div">
            <Flexbox container alignItems="center" gutter={2}>
              <Icon.AddWithCircle inline color={t => t.color.cta} />
              {state.context.placeholder}
            </Flexbox>
          </Link>
        );
      },
    }),
    [],
  );

  const [value, setValue] = React.useState([]);
  const hugeOptionsList = React.useMemo(
    () =>
      accountOptions
        .concat(
          accountOptions.map(x => ({
            ...x,
            value: x.value + Math.random(),
            label: x.label + Math.random(),
          })),
        )
        .concat(
          accountOptions.map(x => ({
            ...x,
            value: x.value + Math.random(),
            label: x.label + Math.random(),
          })),
        )
        .concat(
          accountOptions.map(x => ({
            ...x,
            value: x.value + Math.random(),
            label: x.label + Math.random(),
          })),
        ),
    [accountOptions],
  );

  return (
    <Input.Select
      options={hugeOptionsList}
      label="User account"
      id="input-select-search-inside"
      autoFocusFirstOption={false}
      placeholder="Select account"
      noFormField
      showSearch
      value={value}
      components={customComponents}
      onChange={newVal => action('change')(newVal) && setValue(newVal)}
      width="350px"
    />
  );
};

export default {
  title: 'Molecules | Input / Select',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};
