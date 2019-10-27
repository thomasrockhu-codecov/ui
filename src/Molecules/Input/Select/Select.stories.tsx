/** eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styled from 'styled-components';
import { Input, Avatar, Flexbox, Number, Typography, Box, Icon } from '../../..';
import { Display } from '../../../common/Display';
import mdx from './Select.mdx';

const FlexedBox = styled(Box)<any>`
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
  background: ${p => p.theme.color.card};
  ${p => (p.focused ? `outline: 1px solid ${p.theme.color.cta};` : '')}
  &:hover {
    background: ${p => p.theme.color.background};
  }
  &:focus {
    background: ${p => p.theme.color.background};
  }
`;

const AccountListItem = ({ index }: any, ref) => {
  const [state] = useSelectMachineFromContext();
  const option = state.context.options[index];
  const selected = state.context.selectedItems.includes(option);
  const focused = state.context.itemFocusIdx === index;
  console.log({ focused });
  return (
    <StyledBox px={2} py={1} focused={focused} ref={ref}>
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

// const Chevron = styled(Icon.ChevronDown)<{ open: boolean }>`
//   transform: translateY(-50%) ${p => (p.open ? 'rotate(180deg)' : 'rotate(0)')};
//   transform-origin: center center;
//   transition: transform 0.16s ease-out;
//   position: absolute;
//   height: ${p => p.theme.spacing.unit(2)}px;
//   top: 50%;
//   right: ${p => p.theme.spacing.unit(1)}px;
//   pointer-events: none;
// `;

// const StyledRelativeDiv = styled.div<any>`
//   position: relative;
//   display: inline-block;
//   width: ${p => (p.fullWidth ? '100%' : 'initial')};
// `;

// const height = css<Pick<Props, 'size'>>`
//   height: ${p => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
// `;

// const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
//   ${p =>
//     p.disabled
//       ? ''
//       : `
//       &:hover {
//         border-color: ${p.theme.color.inputBorderHover};
//       }
// `}
// `;

// const focusBorderStyles = css`
//   &:focus-within {
//     border-color: ${p => p.theme.color.borderActive};
//   }
//   &.focus-within {
//     border-color: ${p => p.theme.color.borderActive};
//   }
// `;
// const hasError = (error?: Props['error']) => error && error !== '';
// const borderStyles = css<Pick<Props, 'error' | 'success'>>`
//   outline: none;
//   border: 1px solid
//     ${p => {
//       if (hasError(p.error)) return p.theme.color.inputBorderError;
//       if (p.success) return p.theme.color.inputBorderSuccess;
//       return p.theme.color.inputBorder;
//     }};
//   position: relative;
//   ${hoverBorderStyles}
//   ${focusBorderStyles}
// `;

// const SelectWrapper = styled(NormalizedElements.Button).attrs({ type: 'button' })`
//   ${height}
//   ${borderStyles}
//   position:relative;
// `;

// const TheSelect = ({ options }) => {
//   const [current, send] = useMachine(
//     SelectMachine.withContext({
//       error: false,
//       success: false,
//       options: options,
//       selectedItems: [],
//       disabled: false,
//       open: false,
//       itemFocusIdx: null,
//     }),
//   );

//   React.useEffect(() => {
//     send({ type: 'SYNC', payload: { options } });
//   }, [options, send]);

//   const handleClick = option => () => {
//     const isSelected = current.context.selectedItems.includes(option);
//     const type = isSelected ? 'DESELECT_ITEM' : 'SELECT_ITEM';
//     console.log({ isSelected, type, option });
//     send({ type, payload: option });
//   };
//   const handleKeyDown = e => {
//     console.log(e.key);
//     if (e.key === 'ArrowDown') {
//       send({ type: 'FOCUS_NEXT_ITEM' });
//       e.preventDefault();
//       return false;
//     }
//     if (e.key === 'ArrowUp') {
//       send({ type: 'FOCUS_PREV_ITEM' });
//       e.preventDefault();
//       return false;
//     }
//     if (e.key === 'Tab') {
//       e.preventDefault();
//       send({ type: 'BLUR' });
//       return false;
//     }
//     if (e.key === ' ') {
//       send({ type: 'SELECT_FOCUSED_ITEM' });
//       e.preventDefault();
//       return false;
//     }
//     if (e.key === 'Enter') {
//       send({ type: 'SELECT_FOCUSED_ITEM' });
//       e.preventDefault();
//       return false;
//     }
//   };
//   const isOpen = current.matches({ open: 'on' });

//   const isFirstRender = React.useRef(true);
//   const buttonRef = React.useRef(null);
//   const itemRefs = React.useMemo(() => [], []);

//   React.useLayoutEffect(() => {
//     if (isOpen) {
//       send({ type: 'FOCUS' });
//     } else if (!isFirstRender.current) {
//       buttonRef.current.focus();
//     }
//   }, [isOpen, send]);

//   const setItemRef = index => ref => {
//     if (ref) itemRefs[index] = ref;
//   };

//   React.useEffect(() => {
//     if (current.matches('interaction.enabled.active.focus.listItem.anyItemFocused')) {
//       itemRefs[current.context.itemFocusIdx].focus();
//     }
//   }, [current]);

//   React.useEffect(() => {
//     isFirstRender.current = false;
//   }, []);

//   const label =
//     current.context.selectedItems.length > 0
//       ? current.context.selectedItems[0].label
//       : 'Nothing yet';
//   return (
//     <div>
//       <FormField width="100%" label="Hit me">
//         <SelectWrapper ref={buttonRef} onClick={() => send({ type: 'TOGGLE' })}>
//           {label}
//           <Chevron open={isOpen} />
//         </SelectWrapper>
//       </FormField>
//       {isOpen && (
//         <OptionList
//           onFocus={() => send({ type: 'FOCUS' })}
//           onBlur={() => send({ type: 'BLUR' })}
//           onKeyDown={handleKeyDown}
//         >
//           {current.context.options.map((option, idx) => {
//             const focused = idx === current.context.itemFocusIdx;
//             return (
//               <Option
//                 label={option.label}
//                 value={option.value}
//                 focused={focused}
//                 key={option.value}
//                 ref={setItemRef(idx)}
//                 selected={current.context.selectedItems.includes(option)}
//                 onClick={handleClick(option)}
//               />
//             );
//           })}
//         </OptionList>
//       )}
//     </div>
//   );
// };

// const machineStory = () => {
//   const [options, setOptions] = React.useState(() => [
//     { value: 1, label: '1' },
//     { value: 2, label: '2' },
//     { value: 3, label: '3' },
//   ]);
//   return (
//     <>
//       <button onClick={() => setOptions(options.slice(0, -1))}>Remove one</button>
//       <pre>{JSON.stringify(options)}</pre>
//       <TheSelect options={options} />
//       <TheSelect options={options} />
//     </>
//   );
// };
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

const useSelectMachineFromContext = Input.Select.useSelectMachineFromContext;
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

export const disabledItems = () => {
  return (
    <Input.Select
      id="onchange-select"
      options={accountOptions.map((acc, i) => (i === 1 ? { ...acc, disabled: true } : acc))}
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

export const multiselect = () => {
  const [value, setValue] = React.useState<any[]>([]);
  return (
    <Input.Select
      id="custom-renderers-select"
      options={accountOptions}
      value={value}
      onChange={setValue}
      multiselect
      label="User account"
      placeholder="Select account"
    />
  );
};

export const changesFromProps = () => {
  const [accs, setAccs] = React.useState(accountOptions);
  const [value, setValue] = React.useState([]);
  const removeAcc = () => setAccs(accs.slice(0, -1));
  const selectFirst = () => setValue([accountOptions[0]]);
  return (
    <>
      <button onClick={removeAcc}>Delete</button>
      <button onClick={selectFirst}>Select first</button>
      <pre>{JSON.stringify(accs, null, 2)}</pre>
      <Input.Select
        id="onchange-select"
        value={value}
        onChange={setValue}
        options={accs}
        label="User account"
        placeholder="Select account"
      />
    </>
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

export default {
  title: 'Molecules | Input / Select',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};
