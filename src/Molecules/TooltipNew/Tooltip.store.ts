import { OPEN_DELAY, CLOSE_DELAY } from './consts';

export enum State {
  IDLE,
  BECOMING_VISIBLE,
  VISIBLE,
  LEAVING_VISIBLE,
}

class TooltipStore {
  state: State;

  contextId: number | null;

  becomingVisibleTimeout: number | undefined;

  leavingVisibleTimeout: number | undefined;

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

  setState = (newState: State, contextId?: number) => {
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

  startBecomingVisibleTimeout = (id: number) => {
    window.clearTimeout(this.becomingVisibleTimeout);
    this.setState(State.BECOMING_VISIBLE, id);

    this.becomingVisibleTimeout = window.setTimeout(() => {
      this.setState(State.VISIBLE, id);
    }, OPEN_DELAY);
  };

  startLeavingVisibleTimeout = () => {
    window.clearTimeout(this.leavingVisibleTimeout);
    this.setState(State.LEAVING_VISIBLE);

    this.leavingVisibleTimeout = window.setTimeout(() => {
      this.setState(State.IDLE);
    }, CLOSE_DELAY);
  };

  isVisible = () => {
    return [State.LEAVING_VISIBLE, State.VISIBLE].includes(this.state);
  };
}

export const store = new TooltipStore();
