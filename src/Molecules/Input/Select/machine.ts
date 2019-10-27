import { Machine, send, assign } from 'xstate';

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
        TOGGLE: {
          actions: assign({ open: ctx => !ctx.open }),
          target: '.unknown',
        },
        BLUR: {
          actions: assign({ open: false }),
          target: '.unknown',
        },
        SELECT_ITEM: {
          actions: assign({ open: ctx => (ctx.multiselect ? ctx.open : false) }),
          cond: (ctx, e) => !e.payload.disabled,
          target: '.unknown',
        },
        DESELECT_ITEM: {
          actions: assign({ open: ctx => (ctx.multiselect ? ctx.open : false) }),
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
              { target: 'off' },
            ],
          },
        },
        on: {
          entry: {
            actions: assign({
              itemFocusIdx: ctx =>
                ctx.selectedItems.length > 0
                  ? ctx.options.findIndex(
                      x => x === ctx.selectedItems[ctx.selectedItems.length - 1],
                    )
                  : ctx.itemFocusIdx,
            }),
          },
        },
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
                  return ctx.selectedItems.concat(payload);
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
            send(({ selectedItems, options, itemFocusIdx }) => ({
              type: selectedItems.includes(options[itemFocusIdx]) ? 'DESELECT_ITEM' : 'SELECT_ITEM',
              payload: options[itemFocusIdx],
            })), // single-select
          ],
          in: '#inputSelect.interaction.enabled.active.focus.listItem.anyItemFocused',
        },
        DESELECT_ITEM: {
          target: '.unknown',
          actions: [
            assign({
              selectedItems: ({ selectedItems }, { payload }) => {
                if (payload.all) {
                  return [];
                }
                return selectedItems.filter(x => x !== payload);
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
                cond: ctx => ctx.selectedItems.some(x => !ctx.options.includes(x)),
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
            BLUR: '.active.focus.off',
          },
          initial: 'unknown',
          states: {
            unknown: {
              on: {
                '': {
                  target: 'active.focus',
                  cond: ctx => ctx.itemFocusIdx !== null,
                },
              },
            },
            idle: {},
            active: {
              type: 'parallel',

              states: {
                focus: {
                  initial: 'unknown',
                  states: {
                    off: {},
                    unknown: {
                      on: {
                        '': [
                          { target: 'button', in: '#inputSelect.open.off' },
                          { target: 'listItem' },
                        ],
                      },
                    },
                    button: {},
                    listItem: {
                      id: 'listItemFocus',
                      initial: 'unknown',
                      on: {
                        SEARCH: {
                          target: '.unknown',
                          actions: [
                            assign({
                              searchQuery: (ctx, e) => e.payload,
                            }),
                          ],
                        },
                      },

                      states: {
                        unknown: {
                          on: {
                            '': [
                              {
                                target: 'anyItemFocused',
                                actions: assign({
                                  searchQuery: '',
                                  itemFocusIdx: ctx => {
                                    const newIdx = ctx.options.findIndex(x =>
                                      x.label
                                        .toLowerCase()
                                        .startsWith(ctx.searchQuery.toLowerCase()),
                                    );
                                    return newIdx !== -1 && !ctx.options[newIdx].disabled
                                      ? newIdx
                                      : ctx.itemFocusIdx;
                                  },
                                }),
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
                                itemFocusIdx: ctx => (ctx.itemFocusIdx + 1) % ctx.options.length,
                              }),
                            },

                            FOCUS_PREV_ITEM: {
                              target: 'anyItemFocused',
                              actions: assign({
                                itemFocusIdx: ctx =>
                                  ctx.itemFocusIdx - 1 >= 0
                                    ? ctx.itemFocusIdx - 1
                                    : ctx.options.length - 1,
                              }),
                            },
                          },
                        },
                        noneItemsFocused: {
                          on: {
                            '': {
                              target: '#listItemFocus.unknown',
                              actions: assign({
                                itemFocusIdx: ctx => (ctx.options.length > 0 ? 0 : null),
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
  },
});
