import React from 'react';
import R from 'ramda';

import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { Input, Avatar, Flexbox, Number, Typography, Box, Link, Icon, Button } from '../../..';
import { Display } from '../../../common/Display';
import { SelectState, Action } from './Select.types';
import mdx from './Select.mdx';

const loggingReducer = (state: SelectState, incomingAction: Action) => {
  action(incomingAction.type)(incomingAction.payload);
  return Input.Select.defaults.reducer(state, incomingAction);
};

const actionTypes = Input.Select.defaults.actionTypes;
const useSelectReducer = Input.Select.useSelectReducer;
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

const StyledBox: React.FC<any> = styled(Box)`
  cursor: pointer;
  background: ${p => p.theme.color.card};
  outline: none;
  &:hover {
    background: ${p => p.theme.color.background};
  }
  &:focus {
    background: ${p => p.theme.color.background};
  }
`;

const FlexedBox = styled(Box)<any>`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const AccountValue = () => {
  const [state] = useSelectReducer();

  const selectedOption = state.value.length === 0 ? null : state.value[0];

  return (
    <FlexedBox px={2} pr={8}>
      {!selectedOption ? (
        state.placeholder
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

const AccountListItem = ({ index }: any, ref: any) => {
  const [state] = useSelectReducer();
  const option = state.options[index];
  const selected = state.value.includes(option);

  return (
    <StyledBox px={2} py={1} ref={ref} tabIndex={0}>
      <Flexbox container justifyContent="space-between" gutter={4}>
        <Flexbox item container alignItems="center" basis="32px" grow={0}>
          <Avatar>{option.symbol}</Avatar>
        </Flexbox>
        <Flexbox item container direction="column" grow={1}>
          <Flexbox item>
            <Typography type="secondary" color={t => t.color.text}>
              {option.label}
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
              <Icon.CheckMark color={t => t.color.cta} />
            </Box>
          </Flexbox>
        )}
      </Flexbox>
    </StyledBox>
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

export const defaultStory = () => {
  return (
    <Input.Select options={accountOptions} label="User account" placeholder="Select account" />
  );
};

defaultStory.story = {
  name: 'Default',
};

export const two = () => {
  return (
    <>
      <Input.Select options={accountOptions} label="User account" placeholder="Select account" />
      <Input.Select options={accountOptions} label="User account" placeholder="Select account" />
    </>
  );
};

export const fullWidthStory = () => {
  return (
    <Input.Select
      reducer={loggingReducer}
      options={accountOptions}
      label="User account"
      placeholder="Select account"
      onChange={action('change')}
      onBlur={action('blur')}
      onFocus={action('focus')}
      fullWidth
    />
  );
};

fullWidthStory.story = {
  name: 'Full width',
};

// eslint-disable-next-line no-underscore-dangle
export const _300PxWidth = () => {
  return (
    <Input.Select
      reducer={loggingReducer}
      options={accountOptions}
      label="User account"
      placeholder="Select account"
      onChange={action('change')}
      onBlur={action('blur')}
      onFocus={action('focus')}
      width="300px"
    />
  );
};

_300PxWidth.story = {
  name: '300px width',
};

export const accessibleFromDocumentForms = () => {
  const Inner = () => {
    const FORM_NAME = 'testForm';
    const SELECT_NAME = 'mySelect';

    // @ts-ignore
    const [_, forceUpdate] = React.useState([]); // eslint-disable-line @typescript-eslint/no-unused-vars

    return (
      <form name={FORM_NAME}>
        <Input.Select
          reducer={loggingReducer}
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
  return <Inner />;
};

accessibleFromDocumentForms.story = {
  name: 'Accessible from document.forms',
};

export const controlled = () => {
  const Component = () => {
    const localOptions = React.useMemo(
      () => [{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }],
      [],
    );
    const [selectedValue, setSelectedValue] = React.useState<Array<any>>([]);

    // Going to allow
    // only selection of
    // { value: 2, label: 2 } option
    const handleChange = (newValue: any[]) => {
      if (newValue.includes(localOptions[1])) {
        setSelectedValue(newValue);
      }
    };

    return (
      <>
        <Input.Select
          reducer={loggingReducer}
          options={localOptions}
          value={selectedValue}
          label="Can select only #2"
          placeholder="Select me"
          onChange={handleChange}
        />
        <Button onClick={() => setSelectedValue([localOptions[0]])}>Select 1st</Button>
      </>
    );
  };
  return <Component />;
};

export const defaultVariations = () => {
  return (
    <Display
      items={[
        {
          title: 'Disabled',
          component: (
            <Input.Select
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

export const sizeSVariations = () => {
  return (
    <Display
      items={[
        {
          title: 'Disabled',
          component: (
            <Input.Select
              options={accountOptions}
              label="User account"
              size="s"
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
              size="s"
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
              label="User account"
              size="s"
              extraInfo="Some extra info"
              placeholder="Select account"
            />
          ),
        },
        {
          title: 'Success',
          component: (
            <Input.Select
              options={accountOptions}
              label="User account"
              size="s"
              success
              placeholder="Select account"
            />
          ),
        },
      ]}
    />
  );
};

sizeSVariations.story = {
  name: 'Size = `s` variations',
};

export const customListItemRenderer = () => {
  return (
    <>
      <Input.Select
        components={{ ListItem: AccountListItem }}
        options={accountOptions}
        label="Open me"
        placeholder="Select account"
        onChange={action('change1')}
      />
    </>
  );
};

customListItemRenderer.story = {
  name: 'Custom ListItem renderer',
};

export const customSelectedValueRenderer = () => {
  return (
    <Input.Select
      components={{
        SelectedValue: AccountValue,
      }}
      options={accountOptions}
      label="Select something"
      placeholder="Select account"
      onChange={action('change')}
    />
  );
};

customSelectedValueRenderer.story = {
  name: 'Custom SelectedValue renderer',
};

export const customSelectedValueAndListItemRenderer = () => {
  return (
    <Input.Select
      components={{
        SelectedValue: AccountValue,
        ListItem: AccountListItem,
      }}
      options={accountOptions}
      label="User account"
      onChange={action('value changed')}
      placeholder="Select account"
    />
  );
};

customSelectedValueAndListItemRenderer.story = {
  name: 'Custom SelectedValue and ListItem renderer',
};

export const linkWithDropdownAndSearchBox = () => {
  type SearchContextType = [string, (x: string) => void];
  const SearchContext = React.createContext<SearchContextType>(['', (_: string) => {}]);
  const Component = () => {
    const [filterQuery, setFilterQuery] = React.useState('');

    const customComponents = React.useMemo(
      () => ({
        List: ({ children }: any) => {
          const [filterQueryInner, setFilterQueryInner] = React.useContext(SearchContext);
          const handleChange = React.useCallback(e => setFilterQueryInner(e.target.value), [
            setFilterQueryInner,
          ]);
          React.useEffect(() => () => setFilterQueryInner(''), []);
          return (
            <Input.Select.defaults.components.List position="left">
              <Box px={2} mb={2}>
                <Input.Text
                  leftAddon={<Icon.Search />}
                  label="Filter"
                  autoFocus
                  key={2}
                  value={filterQueryInner}
                  onChange={handleChange}
                />
              </Box>
              {children}
            </Input.Select.defaults.components.List>
          );
        },

        SelectedValue: (_: any, ref: React.Ref<any>) => {
          const [state] = useSelectReducer();

          return (
            <Link ref={ref} as="div">
              <Flexbox container alignItems="center" gutter={2}>
                <Icon.AddWithCircle inline color={t => t.color.cta} />
                {state.placeholder}
              </Flexbox>
            </Link>
          );
        },
      }),
      [],
    );

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

    const filteredOptions = hugeOptionsList.filter(x =>
      x.label.toLowerCase().includes(filterQuery.toLowerCase()),
    );

    return (
      <SearchContext.Provider value={[filterQuery, setFilterQuery]}>
        <Input.Select
          options={filteredOptions}
          label="User account"
          autoFocusFirstOption={false}
          placeholder="Select account"
          noFormField
          components={customComponents}
          onChange={action('change')}
        />
      </SearchContext.Provider>
    );
  };
  return <Component />;
};

linkWithDropdownAndSearchBox.story = {
  name: 'Link with dropdown and search box',
};

export const multiselect = () => {
  const multiselectReducer = (state: SelectState, incomingAction: Action) => {
    if (incomingAction.type === actionTypes['Select.SelectValue']) {
      return {
        ...state,
        value: [...state.value, incomingAction.payload],
      };
    }
    if (incomingAction.type === 'Select.DeselectValue') {
      return {
        ...state,
        value: state.value.filter(x => !Object.is(x, incomingAction.payload)),
      };
    }
    return Input.Select.defaults.reducer(state, incomingAction);
  };

  const MultiSelectValue = (_: any, ref: React.Ref<any>) => {
    const [state] = useSelectReducer();
    return (
      <FlexedBox px={2} pr={8} ref={ref}>
        {state.value.length === 0 ? state.placeholder : `Selected (${state.value.length})`}
      </FlexedBox>
    );
  };

  return (
    <Input.Select
      reducer={multiselectReducer}
      options={accountOptions}
      components={{
        SelectedValue: MultiSelectValue,
        ListItem: Input.Select.defaults.components.MultiSelectListItem,
      }}
      label="User account"
      width="300px"
      placeholder="Select account"
      onChange={action('change')}
    />
  );
};

export const multiselectAccount = () => {
  const multiselectReducer = (state: SelectState, incomingAction: Action) => {
    if (incomingAction.type === actionTypes['Select.SelectValue']) {
      return {
        ...state,
        value: [...state.value, incomingAction.payload],
      };
    }
    if (incomingAction.type === 'Select.DeselectValue') {
      return {
        ...state,
        value: state.value.filter(x => !Object.is(x, incomingAction.payload)),
      };
    }
    return Input.Select.defaults.reducer(state, incomingAction);
  };

  const MultiSelectValue = (_: any, ref: React.Ref<any>) => {
    const [state] = useSelectReducer();
    return (
      <FlexedBox px={2} pr={8} ref={ref}>
        {state.value.length === 0 ? state.placeholder : `Selected (${state.value.length})`}
      </FlexedBox>
    );
  };

  const MultiSelectListItem = ({ index }: any, ref: any) => {
    const [state] = useSelectReducer();
    const option = state.options[index];
    const selected = state.value.includes(option);

    return (
      <StyledBox px={3} py={1} ref={ref} tabIndex={0}>
        <Flexbox container alignItems="center" gutter={0} height={9}>
          <Flexbox item container alignItems="center">
            {/** TODO: revisit a11y here */}
            <Input.Checkbox name="example" label="" checked={selected} />
          </Flexbox>
          <Flexbox item container direction="column" grow={1} gutter={0}>
            <Flexbox item>
              <Typography type="secondary" color={t => t.color.text} weight="bold">
                {option.label}
              </Typography>
              <Typography type="tertiary" color={t => t.color.text}>
                {' '}
                <span aria-hidden>&#183;</span> {option.accno}
              </Typography>
            </Flexbox>
            <Typography type="caption" color={t => t.color.text}>
              <Number value={option.amount.value} currency={option.amount.currency} />
            </Typography>
          </Flexbox>
        </Flexbox>
      </StyledBox>
    );
  };

  return (
    <Input.Select
      reducer={multiselectReducer}
      options={accountOptions}
      components={{ SelectedValue: MultiSelectValue, ListItem: MultiSelectListItem }}
      label="User account"
      width="300px"
      placeholder="Select account"
      onChange={action('change')}
    />
  );
};

multiselectAccount.story = {
  name: 'Multiselect account',
};

export const multiselectAccountWithSelectAll = () => {
  // Reducer will handle selection/deselection part + select all
  const multiselectReducer = (state: SelectState, incomingAction: Action) => {
    if (incomingAction.type === actionTypes['Select.SelectValue']) {
      if (incomingAction.payload && incomingAction.payload.selectAll) {
        return { ...state, value: state.options };
      }
      return {
        ...state,
        value: [...state.value, incomingAction.payload],
      };
    }
    if (incomingAction.type === 'Select.DeselectValue') {
      if (incomingAction.payload && incomingAction.payload.selectAll) {
        return { ...state, value: [] };
      }
      return {
        ...state,
        value: state.value.filter(x => !Object.is(x, incomingAction.payload) && !x.selectAll),
      };
    }
    return Input.Select.defaults.reducer(state, incomingAction);
  };

  // SelectedValue
  // Would be different for different use-cases
  const MultiSelectValue = (_: any, ref: React.Ref<any>) => {
    const [state] = useSelectReducer();
    return (
      <FlexedBox px={2} pr={8} ref={ref}>
        {state.value.length === 0 ? state.placeholder : `Selected (${state.value.length})`}
      </FlexedBox>
    );
  };

  // prettier-ignore
  const StyledBoxWithBorder = styled(StyledBox)`
    ${p => !p.selectAll ? "" : `
      border-bottom: 1px solid ${p.theme.color.divider};
      `}
    `;

  const MultiSelectListItem = ({ index }: any, ref: any) => {
    const [state] = useSelectReducer();
    const option = state.options[index];
    const selected = state.value.includes(option);

    return (
      <StyledBoxWithBorder px={3} py={1} ref={ref} tabIndex={0} selectAll={option.selectAll}>
        <Flexbox container alignItems="center" gutter={0} height={9}>
          <Flexbox item container alignItems="center">
            {/** TODO: revisit a11y here */}
            <Input.Checkbox name="example" label="" checked={selected} />
          </Flexbox>
          <Flexbox item container direction="column" grow={1} gutter={0}>
            <Flexbox item>
              <Typography type="secondary" color={t => t.color.text} weight="bold">
                {option.label}
              </Typography>
              {!option.selectAll && (
                <Typography type="tertiary" color={t => t.color.text}>
                  {' '}
                  <span aria-hidden>&#183;</span> {option.accno}
                </Typography>
              )}
            </Flexbox>
            {!option.selectAll && (
              <Typography type="caption" color={t => t.color.text}>
                <Number value={option.amount.value} currency={option.amount.currency} />
              </Typography>
            )}
          </Flexbox>
        </Flexbox>
      </StyledBoxWithBorder>
    );
  };

  return (
    <Input.Select
      reducer={multiselectReducer}
      options={[{ label: 'Select All', value: 'ALL', selectAll: true }, ...accountOptions]}
      components={{ SelectedValue: MultiSelectValue, ListItem: MultiSelectListItem }}
      label="User account"
      width="300px"
      placeholder="Select account"
      onChange={action('change')}
    />
  );
};

multiselectAccountWithSelectAll.story = {
  name: 'Multiselect account with select all',
};
