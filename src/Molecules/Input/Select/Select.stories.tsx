import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Input, Avatar, Flexbox, Number, Typography, Box, Link, Icon, Button } from '../../..';
import { Display } from '../../../common/Display';

const actionTypes = Input.Select.defaults.actionTypes;
const useSelectReducer = Input.Select.useSelectReducer;
const options = [
  {
    label: 'First account',
    value: '1',
    symbol: 'AF',
    accno: 123,
    amount: { value: 212, currency: 'SEK' },
  },
  {
    label: 'Second acc 2',
    value: '2',
    symbol: '-',
    accno: 123,
    amount: { value: 111, currency: 'SEK' },
  },
  {
    label: 'Third 3',
    value: '3',
    symbol: 'ISK',
    accno: 123,
    amount: { value: 1, currency: 'DKK' },
  },
];

// :

const Log = () => {
  const [state, dispatch] = useSelectReducer();
  return (
    <Box mt={20}>
      Inner state of Input.Select:
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Button onClick={() => dispatch({ type: actionTypes['Select.Open'] })}>Open</Button>
      <Button variant="secondary" onClick={() => dispatch({ type: actionTypes['Select.Close'] })}>
        Close
      </Button>
    </Box>
  );
};
const StyledBox = styled(Box)`
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
  flex: 1;
  display: flex;
`;

const AccountValue = () => {
  const [state] = useSelectReducer();

  const selectedOption = state.value.length === 0 ? null : state.value[0];

  return (
    <FlexedBox px={2} pr={8}>
      {!selectedOption ? (
        state.placeholder
      ) : (
        <Flexbox container item justifyContent="space-between" gutter={2} flex={1}>
          <Flexbox item container alignItems="center" basis="32px" grow={0}>
            <Avatar size="s">{selectedOption.symbol}</Avatar>
          </Flexbox>
          <Flexbox item container alignItems="center" flex={1}>
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

const AccountListItem = ({ index }, ref) => {
  const [state] = useSelectReducer();
  const option = state.options[index];
  const selected = state.value.includes(option);

  return (
    <StyledBox px={2} py={1} selected={selected} ref={ref} tabIndex={0}>
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

storiesOf('Molecules | Input / Select', module)
  .add('Default', () => {
    return (
      <Input.Select
        options={options}
        label="User account"
        placeholder="Select account"
        onChange={action('change')}
      />
    );
  })
  .add('Controlled', () => {
    const Component = () => {
      const [selectedValue, setSelectedValue] = React.useState<Array<any>>([]);
      const localOptions = React.useMemo(
        () => [{ value: 1, label: 1 }, { value: 2, label: 2 }, { value: 3, label: 3 }],
        [],
      );

      return (
        <Flexbox container direction="column">
          <Input.Select
            options={localOptions}
            value={selectedValue}
            label="User account"
            placeholder="Select account"
            onChange={setSelectedValue}
          />
          <Flexbox item flex="0">
            <Button
              onClick={() =>
                setSelectedValue([
                  localOptions[
                    (localOptions.findIndex(x => selectedValue.includes(x)) + 1) %
                      localOptions.length
                  ],
                ])
              }
            >
              next item
            </Button>
          </Flexbox>
        </Flexbox>
      );
    };
    return <Component />;
  })

  .add('Default variations', () => {
    return (
      <Display
        items={[
          {
            title: 'Disabled',
            component: (
              <Input.Select
                options={options}
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
                options={options}
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
                options={options}
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
                options={options}
                label="User account"
                success
                placeholder="Select account"
              />
            ),
          },
        ]}
      />
    );
  })
  .add('Custom ListItem renderer', () => {
    return (
      <>
        <Input.Select
          type
          components={{ ListItem: AccountListItem }}
          options={options}
          label="Open me"
          placeholder="Select account"
          onChange={action('change1')}
        />
      </>
    );
  })
  .add('Custom SelectedValue renderer', () => {
    return (
      <Input.Select
        components={{
          SelectedValue: AccountValue,
        }}
        options={options}
        label="Select something"
        placeholder="Select account"
        onChange={action('change')}
      />
    );
  })

  .add('Custom SelectedValue and ListItem renderer', () => {
    return (
      <Input.Select
        components={{
          SelectedValue: AccountValue,
          ListItem: AccountListItem,
        }}
        options={options}
        label="User account"
        onChange={action('value changed')}
        onStateChange={action('state changed')}
        placeholder="Select account"
      />
    );
  })
  .add('Provider/Consumer', () => {
    return (
      <Input.Select.Provider>
        <Input.Select
          options={options}
          label="User account"
          onChange={action('value changed')}
          onStateChange={action('state changed')}
          placeholder="Select account"
        />
        <Log />
      </Input.Select.Provider>
    );
  })
  .add('Link with dropdown and search box', () => {
    const SearchContext = React.createContext<[string, React.ChangeEventHandler]>(['', () => {}]);
    const Component = () => {
      const [filterQuery, setFilterQuery] = React.useState('');

      const customComponents = React.useMemo(
        () => ({
          List: ({ children }) => {
            const [filterQueryInner, setFilterQueryInner] = React.useContext(SearchContext);
            const handleChange = React.useCallback(e => setFilterQueryInner(e.target.value), [
              setFilterQueryInner,
            ]);
            return (
              <Input.Select.defaults.components.List position="left">
                <Box px={2} mb={2}>
                  <Input.Text
                    // FIXME: Add search icon
                    leftAddon="🔍"
                    label="Filter"
                    key={2}
                    value={filterQueryInner}
                    onChange={handleChange}
                  />
                </Box>
                {children}
              </Input.Select.defaults.components.List>
            );
          },

          SelectedValue: (_, ref) => {
            const [state] = useSelectReducer();

            return (
              <Link ref={ref} tabIndex={-1} as="div">
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
          options
            .concat(
              options.map(x => ({
                ...x,
                value: x.value + Math.random(),
                label: x.label + Math.random(),
              })),
            )
            .concat(
              options.map(x => ({
                ...x,
                value: x.value + Math.random(),
                label: x.label + Math.random(),
              })),
            )
            .concat(
              options.map(x => ({
                ...x,
                value: x.value + Math.random(),
                label: x.label + Math.random(),
              })),
            ),
        [options],
      );

      const filteredOptions = hugeOptionsList.filter(x =>
        x.label.toLowerCase().includes(filterQuery.toLowerCase()),
      );

      return (
        <SearchContext.Provider value={[filterQuery, setFilterQuery]}>
          <Input.Select
            options={filteredOptions}
            label="User account"
            placeholder="Select account"
            noFormField
            components={customComponents}
            onChange={action('change')}
          />
        </SearchContext.Provider>
      );
    };
    return <Component />;
  })
  .add(`🚧 Multiselect (WIP, don't use for now)`, () => {
    const multiselectReducer = (state, action) => {
      if (action.type === actionTypes['Select.SelectValue']) {
        return {
          ...state,
          value: [...state.value, action.payload],
        };
      }
      if (action.type === 'Select.DeselectValue') {
        return {
          ...state,
          value: state.value.filter(x => !Object.is(x, action.payload)),
        };
      }
      return Input.Select.defaults.reducer(state, action);
    };

    const MultiSelectValue = (_, ref) => {
      const [state] = useSelectReducer();
      return (
        <FlexedBox px={2} pr={8} ref={ref}>
          {state.value.length === 0 ? state.placeholder : `Selected (${state.value.length})`}
        </FlexedBox>
      );
    };
    return (
      <Input.Select.Provider value={[multiselectReducer]}>
        <Input.Select
          options={options}
          components={{ SelectedValue: MultiSelectValue }}
          label="User account"
          placeholder="Select account"
          onChange={action('change')}
        />
        <Log />
      </Input.Select.Provider>
    );
  });
