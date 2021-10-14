import deposit from './deposit';
import internalTransfer from './internalTransfer';
import linkedAccounts from './linkedAccounts';
import monthlySavings from './monthlySavings';
import swish from './swish';
import swishFill from './swishFill';
import transactions from './transactions';
import trustly from './trustly';
import withdraw from './withdraw';

export default {
  ...deposit,
  ...internalTransfer,
  ...linkedAccounts,
  ...monthlySavings,
  ...swish,
  ...swishFill,
  ...transactions,
  ...trustly,
  ...withdraw,
};
