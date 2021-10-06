import deposit from './deposit';
import internalTransfer from './internalTransfer';
import linkedAccounts from './linkedAccounts';
import monthlySavings from './monthlySavings';
import swish from './swish';
import transactions from './transactions';
import trustly from './trustly';
import withdraw from './withdraw';

export default {
  ...deposit,
  ...internalTransfer,
  ...linkedAccounts,
  ...monthlySavings,
  ...swish,
  ...transactions,
  ...trustly,
  ...withdraw,
};
