import { Machine, send, assign } from 'xstate';

const isEqualOptions = (a, b) => a === b || a.value === b.value;
const includesOption = (arr, option) =>
  arr.includes(option) || arr.some(x => x.value === option.value);

export const SelectMachine = Machine(
  {
    id: 'inputSelect',
    type: 'parallel',
    context: {
      error: true,
      success: false,
      options: [] as Array<any>,
      selectedItems: [] as Array<any>,
      disabled: false,
      open: true,
      itemFocusIdx: null,
      searchQuery: '',
      extraInfo: '',
      multiselect: false,
      label: '',
      lastNavigationType: null,
      showSearch: false,
      visibleOptions: [] as Array<any>,
      id: 'id-from-props',
      valueFromProps: [] as Array<any>,
      uncommitedSelectedItems: [] as Array<any>,
    },
    on: {
      SYNC: {
        actions: 'syncProps',
        target: 'selection.unknown',
      },
    },
    states: {
      open: {
        initial: 'unknown',
        on: {
          OPEN: {
            target: '.on',
            actions: 'restoreFocusOrFocusFirst',
          },
          CLOSE: { target: '.off', actions: 'cleanSearch' },
          TOGGLE: [{ actions: send('CLOSE'), cond: ctx => ctx.open }, { actions: send('OPEN') }],
          BLUR: {
            actions: send('CLOSE'),
          },
          SELECT_ITEM: {
            actions: send('CLOSE'),
            cond: (ctx, e) => !e.payload.disabled && !ctx.multiselect,
          },
          DESELECT_ITEM: {
            actions: send('CLOSE'),
            cond: (ctx, e) => !e.payload.disabled && !ctx.multiselect,
          },
        },
        states: {
          unknown: {
            on: {
              '': [
                {
                  target: 'on',
                  cond: ctx => ctx.open,
                },
                {
                  target: 'off',
                },
              ],
            },
          },
          on: {
            onEntry: assign({ open: true }),
          },
          off: {
            onEntry: assign({ open: false }),
          },
        },
      },
      selection: {
        initial: 'unknown',
        states: {
          unknown: {
            on: {
              '': [
                {
                  target: 'controlled',
                  actions: 'forceValueFromProps',
                  cond: ctx => !!ctx.valueFromProps,
                },
                { target: 'uncontrolled' },
              ],
            },
          },
          controlled: {
            initial: 'unknown',
            on: {
              SELECT_ITEM: {
                target: '.changeUncommitted',
                actions: 'updateUncommittedItems',
                cond: (_, e) => !e.payload.disabled,
              },
              SELECT_FOCUSED_ITEM: {
                target: '.unknown',
                actions: 'sendSelectOrDeselectVisibleFocusedOption',
              },
              DESELECT_ITEM: {
                target: '.unknown',
                actions: 'deselectOption',
                cond: ctx => !!ctx.multiselect,
              },
            },
            states: {
              unknown: {
                on: {
                  '': [
                    {
                      target: 'incorrectSelection',
                      cond: ctx => ctx.selectedItems.some(x => !includesOption(ctx.options, x)),
                    },
                    {
                      target: 'on',
                      cond: ctx => ctx.valueFromProps.length > 0,
                    },
                    { target: 'off' },
                  ],
                },
              },
              on: {},
              off: {},
              changeUncommitted: {
                on: { CHANGE_COMMIT: { target: 'unknown', actions: 'commitSelectedItems' } },
              },
              incorrectSelection: {
                on: {
                  '': {
                    target: 'off',
                    actions: 'resetSelection',
                  },
                },
              },
            },
          },
          uncontrolled: {
            initial: 'unknown',
            on: {
              SELECT_ITEM: {
                target: '.changeUncommitted',
                actions: 'updateUncommittedItems',
                cond: (_, e) => !e.payload.disabled,
              },
              SELECT_FOCUSED_ITEM: {
                target: '.unknown',
                actions: 'sendSelectOrDeselectVisibleFocusedOption',
              },
              DESELECT_ITEM: {
                target: '.unknown',
                actions: 'deselectOption',
                cond: ctx => !!ctx.multiselect,
              },
            },
            states: {
              unknown: {
                on: {
                  '': [
                    {
                      target: 'incorrectSelection',
                      cond: ctx => ctx.selectedItems.some(x => !includesOption(ctx.options, x)),
                    },
                    { target: 'on', cond: ctx => ctx.selectedItems.length > 0 },
                    { target: 'off' },
                  ],
                },
              },
              on: {},
              off: {},
              changeUncommitted: {
                on: { CHANGE_COMMIT: { target: 'unknown', actions: 'commitSelectedItems' } },
              },
              incorrectSelection: {
                on: {
                  '': {
                    target: 'off',
                    actions: 'resetSelection',
                  },
                },
              },
            },
          },
        },
      },
      correctness: {
        initial: 'unknown',

        states: {
          unknown: {
            on: {
              '': [
                { target: 'error', cond: ctx => ctx.error },
                { target: 'success', cond: ctx => ctx.success },
                { target: 'neutral' },
              ],
            },
          },
          error: {},
          success: {},
          neutral: {},
        },
      },
      interaction: {
        initial: 'unknown',

        states: {
          unknown: {
            on: {
              '': [
                { target: 'disabled', cond: ctx => ctx.disabled },
                {
                  target: 'disabled',
                  cond: ctx => ctx.options.length === 0,
                },
                { target: 'enabled' },
              ],
            },
          },
          disabled: {},
          enabled: {
            on: {
              BLUR: '.idle',
              FOCUS: '.active.focus.unknown',
              OPEN: '.active.focus.unknown',
              ITEM_CLICK: {
                actions: 'selectOrDeselect',
              },
            },
            initial: 'unknown',
            states: {
              unknown: {
                on: {
                  '': [{ target: 'active', cond: ctx => Boolean(ctx.open) }, { target: 'idle' }],
                },
              },

              idle: {
                on: {
                  FOCUS: 'active.focus.unknown',
                },
              },
              active: {
                type: 'parallel',
                on: {
                  BLUR: 'idle',
                },
                states: {
                  search: {
                    initial: 'unknown',

                    states: {
                      unknown: {
                        on: {
                          '': [
                            { target: 'explicit', cond: ctx => Boolean(ctx.showSearch) },
                            { target: 'implicit' },
                          ],
                        },
                      },
                      explicit: {
                        on: {
                          SEARCH_QUERY_UPDATE: {
                            actions: [
                              'updateSearch',
                              'updateVisibleOptions',
                              'restoreFocusOrFocusFirst',
                            ],
                          },
                        },
                      },
                      implicit: {
                        initial: 'idle',
                        states: {
                          idle: {
                            onEntry: 'cleanSearch',
                            on: {
                              SEARCH_QUERY_UPDATE: {
                                target: 'processInput',
                                actions: 'updateSearch',
                              },
                            },
                          },
                          resetTimeout: {
                            on: {
                              '': 'processInput',
                            },
                          },

                          processInput: {
                            after: {
                              200: 'search',
                            },
                            on: {
                              SEARCH_QUERY_UPDATE: {
                                target: 'resetTimeout',
                                actions: 'updateSearch',
                              },
                            },
                          },

                          search: {
                            on: {
                              '': {
                                target: 'idle',

                                actions: 'setFocusToSearchedOption',
                              },
                            },
                          },
                        },
                      },
                    },
                  },

                  navigation: {
                    on: {
                      CLOSE: {
                        actions: 'setNavTypeKeyboard',
                        target: '.keyboard',
                      },
                    },
                    initial: 'unknown',
                    states: {
                      unknown: {
                        on: {
                          '': [
                            { target: 'mouse', cond: ctx => ctx.lastNavigationType === 'mouse' },
                            { target: 'keyboard' },
                          ],
                        },
                      },
                      keyboard: {
                        on: {
                          MOUSE_MOVE: {
                            target: 'mouse',
                            actions: 'setNavTypeMouse',
                          },
                        },
                      },
                      mouse: {
                        on: {
                          KEY_PRESS: {
                            target: 'keyboard',
                            actions: 'setNavTypeKeyboard',
                          },
                        },
                      },
                    },
                  },
                  focus: {
                    initial: 'unknown',
                    on: {
                      CLOSE: {
                        target: '.button',
                      },
                    },
                    states: {
                      unknown: {
                        on: {
                          '': [
                            { target: 'button', in: '#inputSelect.open.off' },
                            { target: 'listItem', cond: ctx => ctx.itemFocusIdx !== null },
                          ],
                        },
                      },
                      button: {},
                      listItem: {
                        on: {
                          FOCUS_NEXT_ITEM: {
                            actions: 'setNextFocusedItem',
                          },
                          FOCUS_PREV_ITEM: {
                            actions: 'setPrevFocusedItem',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  // @ts-ignore
  {
    actions: {
      updateSearch: assign({
        searchQuery: (_, e) => e.payload,
      }),
      cleanSearch: assign({
        searchQuery: '',
        visibleOptions: ctx => ctx.options,
      }),
      syncProps: assign((ctx, e) => ({
        ...ctx,
        ...e.payload,
        valueFromProps: e.payload.valueFromProps,
        visibleOptions: e.payload.options !== ctx.options ? e.payload.options : ctx.visibleOptions,
      })),
      restoreFocusOrFocusFirst: assign({
        itemFocusIdx: ctx =>
          ctx.selectedItems.length > 0
            ? ctx.visibleOptions.findIndex(x => isEqualOptions(x, ctx.selectedItems[0]))
            : 0,
      }),
      setFocusToSearchedOption: assign({
        itemFocusIdx: ctx => {
          const newIdx = ctx.options.findIndex(x =>
            x.label.toLowerCase().startsWith(ctx.searchQuery.toLowerCase()),
          );
          return newIdx !== -1 && !ctx.options[newIdx].disabled ? newIdx : ctx.itemFocusIdx;
        },
      }),
      setNextFocusedItem: assign({
        itemFocusIdx: ctx => (ctx.itemFocusIdx + 1) % ctx.visibleOptions.length,
      }),
      setPrevFocusedItem: assign({
        itemFocusIdx: ctx =>
          ctx.itemFocusIdx - 1 >= 0 ? ctx.itemFocusIdx - 1 : ctx.visibleOptions.length - 1,
      }),
      setNavTypeKeyboard: assign({
        lastNavigationType: () => 'keyboard',
      }),
      setNavTypeMouse: assign({
        lastNavigationType: 'mouse',
      }),
      selectOrDeselect: send((ctx, event) => {
        const isSelected = includesOption(ctx.selectedItems, event.payload);
        const type = isSelected ? 'DESELECT_ITEM' : 'SELECT_ITEM';

        return {
          type,
          payload: event.payload,
        };
      }),
      sendSelectOrDeselectVisibleFocusedOption: send(ctx => ({
        type: includesOption(ctx.selectedItems, ctx.visibleOptions[ctx.itemFocusIdx])
          ? 'DESELECT_ITEM'
          : 'SELECT_ITEM',
        payload: ctx.visibleOptions[ctx.itemFocusIdx],
      })),
      resetSelection: assign({ selectedItems: [] }),
      deselectOption: assign({
        selectedItems: (ctx, { payload }) => {
          if (payload.all) {
            return [];
          }
          let predicate = x => !isEqualOptions(x, payload);
          if (ctx.options.some(x => x.all)) {
            predicate = x => !x.all && !isEqualOptions(x, payload);
          }
          return ctx.selectedItems.filter(predicate);
        },
      }),
      updateVisibleOptions: assign({
        visibleOptions: (ctx, e) => {
          const newOptions = ctx.options.filter(x =>
            x.label.toLowerCase().includes(e.payload.toLowerCase()),
          );
          return newOptions;
        },
      }),

      updateUncommittedItems: assign({
        uncommitedSelectedItems: (ctx, e) => {
          if (ctx.multiselect) {
            const activeOptions = ctx.options.filter(x => !x.disabled);
            if (e.payload.all) {
              return activeOptions;
            }
            let newSelectedItems = ctx.selectedItems.concat(e.payload);
            const selectAllOption = ctx.options.find(x => x.all);
            if (selectAllOption && newSelectedItems.length === activeOptions.length - 1) {
              newSelectedItems = newSelectedItems.concat(selectAllOption);
            }
            return newSelectedItems;
          }
          return [e.payload];
        },
      }),

      commitSelectedItems: assign({
        selectedItems: ctx => ctx.uncommitedSelectedItems,
      }),
      forceValueFromProps: assign({ selectedItems: ctx => ctx.valueFromProps }),
    },
  },
);
