// eslint-disable-next-line no-shadow
export enum State {
  IDLE,
  BECOMING_VISIBLE,
  VISIBLE,
  LEAVING_VISIBLE,
}

class TooltipStore {
  state: State;

  /**
   ContextId allows us to persist some data around, in Tooltip all we use
   is the id of the current tooltip being interacted with.
   */

  contextId: string | null;

  becomingVisibleTimeout: number | undefined;

  leavingVisibleTimeout: number | undefined;

  /**
   Subscriptions:
   We could require apps to render a <TooltipProvider> around the app and use
   React context to notify Tooltips of changes to our state machine, instead
   we manage subscriptions ourselves and simplify the Tooltip API.

   Maybe if default context could take a hook (instead of just a static value)
   that was rendered at the root for us, that'd be cool! But it doesn't.
   */

  subscriptions: Function[];

  constructor() {
    this.state = State.IDLE;
    this.contextId = null;
    this.becomingVisibleTimeout = undefined;
    this.leavingVisibleTimeout = undefined;
    this.subscriptions = [];
  }

  subscribe = (fn: Function) => {
    this.subscriptions.push(fn);
    return () => {
      this.subscriptions.splice(this.subscriptions.indexOf(fn), 1);
    };
  };

  notify = () => {
    this.subscriptions.forEach((fn) => fn());
  };

  setState = (newState: State, contextId?: string) => {
    const prevState = this.state;

    if (prevState === State.BECOMING_VISIBLE) {
      window.clearTimeout(this.becomingVisibleTimeout);
    } else if (prevState === State.LEAVING_VISIBLE) {
      window.clearTimeout(this.leavingVisibleTimeout);
      this.contextId = null;
    }

    this.state = newState;

    if (newState === State.IDLE) {
      this.contextId = null;
    }

    if (contextId) {
      this.contextId = contextId;
    }

    this.notify();
  };

  /**
   Timeouts:
   Manages when the user "rests" on an element. Keeps the interface from being
   flashing tooltips all the time as the user moves the mouse around the screen.
   */

  startBecomingVisibleTimeout = (id: string, openDelay?: number) => {
    window.clearTimeout(this.becomingVisibleTimeout);
    this.setState(State.BECOMING_VISIBLE, id);

    this.becomingVisibleTimeout = window.setTimeout(() => {
      this.setState(State.VISIBLE, id);
    }, openDelay);
  };

  clearBecomingVisibleTimeout = () => {
    window.clearTimeout(this.becomingVisibleTimeout);
  };

  startLeavingVisibleTimeout = (closeDelay?: number) => {
    window.clearTimeout(this.leavingVisibleTimeout);
    this.setState(State.LEAVING_VISIBLE);

    this.leavingVisibleTimeout = window.setTimeout(() => {
      this.setState(State.IDLE);
    }, closeDelay);
  };

  isVisible = () => {
    return [State.LEAVING_VISIBLE, State.VISIBLE].includes(this.state);
  };
}

export const store = new TooltipStore();
