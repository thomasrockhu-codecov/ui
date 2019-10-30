import { Machine, send, assign } from 'xstate';

const isEqualOptions = (a, b) => a === b || a.value === b.value;
const includesOption = (arr, option) =>
  arr.includes(option) || arr.some(x => x.value === option.value);

export const SelectMachine = Machine({
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
  },
  on: {
    SYNC: {
      actions: assign((ctx, e) => ({ ...ctx, ...e.payload })),
    },
  },
  states: {
    open: {
      initial: 'unknown',
      on: {
        OPEN: {
          actions: assign({
            itemFocusIdx: ctx =>
              ctx.selectedItems.length > 0
                ? ctx.options.findIndex(x => isEqualOptions(x, ctx.selectedItems[0]))
                : 0,
          }),
        },
        CLOSE: {
          actions: assign({
            lastNavigationType: () => 'keyboard',
          }),
        },
        TOGGLE: {
          actions: [assign({ open: ctx => !ctx.open }), send(ctx => (ctx.open ? 'OPEN' : 'CLOSE'))],
          target: '.unknown',
        },
        BLUR: {
          actions: [assign({ open: false }), send('CLOSE')],
          target: '.unknown',
        },
        SELECT_ITEM: {
          actions: [
            assign({ open: ctx => (ctx.multiselect ? ctx.open : false) }),
            send(ctx => (ctx.multiselect ? '' : 'CLOSE')),
          ],
          cond: (ctx, e) => !e.payload.disabled,
          target: '.unknown',
        },
        DESELECT_ITEM: {
          actions: [
            assign({ open: ctx => (ctx.multiselect ? ctx.open : false) }),
            send(ctx => (ctx.multiselect ? '' : 'CLOSE')),
          ],
          cond: (ctx, e) => !e.payload.disabled,
          target: '.unknown',
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
        on: {},
        off: {},
      },
    },

    selection: {
      initial: 'unknown',
      on: {
        SELECT_ITEM: {
          target: '.changeUncommitted',
          actions: [
            assign({
              selectedItems: (ctx, { payload }) => {
                if (ctx.multiselect) {
                  if (payload.all) {
                    return ctx.options;
                  }
                  let newSelectedItems = ctx.selectedItems.concat(payload);
                  const selectAllOption = ctx.options.find(x => x.all);
                  if (selectAllOption && newSelectedItems.length === ctx.options.length - 1) {
                    // Maybe filtering for disabled?
                    newSelectedItems = newSelectedItems.concat(selectAllOption);
                  }
                  return newSelectedItems;
                }
                return [payload];
              },
            }),
          ],
          cond: (ctx, e) => !e.payload.disabled,
          in: '#inputSelect.interaction.enabled',
        },
        SELECT_FOCUSED_ITEM: {
          target: '.unknown',
          actions: [
            send(({ selectedItems, visibleOptions, itemFocusIdx }) => ({
              type: includesOption(selectedItems, visibleOptions[itemFocusIdx])
                ? 'DESELECT_ITEM'
                : 'SELECT_ITEM',
              payload: visibleOptions[itemFocusIdx],
            })), // single-select
          ],
          in: '#inputSelect.interaction.enabled.active.focus.listItem.anyItemFocused',
        },
        DESELECT_ITEM: {
          target: '.unknown',
          actions: [
            assign({
              selectedItems: (ctx, { payload }) => {
                if (payload.all) {
                  return [];
                }
                let predicate = x => x !== payload;
                if (ctx.options.some(x => x.all)) {
                  predicate = x => !x.all && x !== payload;
                }
                return ctx.selectedItems.filter(predicate);
              },
            }),
          ],
          cond: ctx => !!ctx.multiselect,
          in: '#inputSelect.interaction.enabled',
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
        changeUncommitted: {
          on: { CHANGE_COMMIT: 'unknown' },
        },
        incorrectSelection: {
          on: {
            '': {
              target: 'unknown',
              actions: assign({ selectedItems: [] }),
            },
          },
        },
        on: {},
        off: {},
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
            HOVER_ON: '.active.hover.on',
            HOVER_OFF: '.active.hover.off',
            FOCUS: '.active.focus.unknown',
            OPEN: '.active.focus.unknown',
            SELECT_ITEM: {
              target: '.active.focus.button',
            },
            BLUR: '.idle',
            ITEM_CLICK: {
              actions: send((ctx, event) => {
                const isSelected = includesOption(ctx.selectedItems, event.payload);
                const type = isSelected ? 'DESELECT_ITEM' : 'SELECT_ITEM';
                return {
                  type,
                  payload: event.payload,
                };
              }),
            },
          },
          initial: 'unknown',
          states: {
            unknown: {
              on: {
                '': [
                  {
                    target: 'active.focus',
                    cond: ctx => ctx.itemFocusIdx !== null,
                  },
                ],
              },
            },
            idle: {},
            active: {
              type: 'parallel',

              states: {
                navigation: {
                  on: {
                    CLOSE: '.unknown',
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
                          actions: assign({
                            lastNavigationType: () => 'mouse',
                          }),
                        },
                      },
                    },
                    mouse: {
                      on: {
                        KEY_PRESS: {
                          target: 'keyboard',
                          actions: assign({
                            lastNavigationType: () => 'keyboard',
                          }),
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
                    off: {},
                    unknown: {
                      on: {
                        '': [{ target: 'button', cond: ctx => !ctx.open }, { target: 'listItem' }],
                      },
                    },
                    button: {},
                    listItem: {
                      id: 'listItemFocus',
                      initial: 'unknown',
                      on: {
                        SEARCH_QUERY_UPDATE: {
                          target: '.unknown',
                        },
                      },

                      states: {
                        unknown: {
                          on: {
                            '': [
                              {
                                target: 'anyItemFocused',

                                cond: ctx => ctx.searchQuery !== '',
                              },
                              {
                                target: 'anyItemFocused',
                                cond: ctx => ctx.itemFocusIdx !== null,
                              },
                              { target: 'noneItemsFocused' },
                            ],
                          },
                        },

                        anyItemFocused: {
                          on: {
                            FOCUS_NEXT_ITEM: {
                              target: 'anyItemFocused',
                              actions: assign({
                                itemFocusIdx: ctx =>
                                  (ctx.itemFocusIdx + 1) % ctx.visibleOptions.length,
                              }),
                            },

                            FOCUS_PREV_ITEM: {
                              target: 'anyItemFocused',
                              actions: assign({
                                itemFocusIdx: ctx =>
                                  ctx.itemFocusIdx - 1 >= 0
                                    ? ctx.itemFocusIdx - 1
                                    : ctx.visibleOptions.length - 1,
                              }),
                            },
                          },
                        },
                        noneItemsFocused: {
                          on: {
                            '': {
                              target: '#listItemFocus.unknown',
                              actions: assign({
                                itemFocusIdx: ctx => (ctx.visibleOptions.length > 0 ? 0 : null),
                              }),
                            },
                          },
                        },
                      },
                    },
                  },
                },
                hover: {
                  initial: 'off',
                  states: {
                    on: {},
                    off: {},
                  },
                },
              },
            },
          },
        },
      },
    },
    search: {
      initial: 'unknown',
      on: {
        CLOSE: {
          target: '.unknown',
          actions: assign({
            searchQuery: '',
            visibleOptions: ctx => ctx.options,
          }),
        },
      },
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
            SYNC: {
              actions: assign({
                visibleOptions: (ctx, event) => {
                  // if (event.payload.options && ctx.options !== event.payload.options)
                  //   return event.payload.options.filter(x =>
                  //     x.label.toLowerCase().includes(ctx.searchQuery.toLowerCase()),
                  //   );
                  return ctx.visibleOptions;
                },
              }),
            },
            SEARCH_QUERY_UPDATE: {
              actions: [
                assign({
                  searchQuery: (ctx, e) => e.payload,
                  itemFocusIdx: 0,
                }),
                send('SEARCH'),
              ],
            },
            SEARCH: {
              in: '#inputSelect.interaction.enabled',
              actions: assign({
                visibleOptions: ctx => {
                  const newOptions = ctx.options.filter(x =>
                    x.label.toLowerCase().includes(ctx.searchQuery.toLowerCase()),
                  );
                  return newOptions;
                },
              }),
            },
          },
        },
        implicit: {
          id: 'implicitSearch',
          initial: 'idle',
          on: {},
          states: {
            idle: {
              on: {
                SEARCH_QUERY_UPDATE: {
                  target: 'processInput',
                  actions: assign({ searchQuery: (_, e) => e.payload }),
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
                  actions: assign({ searchQuery: (ctx, e) => e.payload }),
                },
              },
            },

            search: {
              on: {
                '': {
                  target: 'idle',
                  in: '#inputSelect.interaction.enabled',
                  actions: assign({
                    searchQuery: '',
                    itemFocusIdx: ctx => {
                      const newIdx = ctx.options.findIndex(x =>
                        x.label.toLowerCase().startsWith(ctx.searchQuery.toLowerCase()),
                      );
                      return newIdx !== -1 && !ctx.options[newIdx].disabled
                        ? newIdx
                        : ctx.itemFocusIdx;
                    },
                  }),
                },
              },
            },
          },
        },
      },
    },
  },
});
