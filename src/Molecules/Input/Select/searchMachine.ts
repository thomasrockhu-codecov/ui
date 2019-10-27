import { Machine, assign } from 'xstate';

export const searchMachine = Machine({
  id: 'inputSelect',
  initial: 'idle',
  context: {
    searchQuery: '',
  },
  states: {
    idle: {
      on: {
        CHANGE: {
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
        CHANGE: {
          target: 'resetTimeout',
          actions: assign({ searchQuery: (ctx, e) => ctx.searchQuery + e.payload }),
        },
      },
    },

    search: {
      on: {
        SEARCHED: 'idle',
      },
    },
  },
});
