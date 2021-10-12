import bank from './bank';
import global from './global';
import market from './market';
import orders from './orders';

export default {
  ...bank,
  ...global,
  ...market,
  ...orders,
};
