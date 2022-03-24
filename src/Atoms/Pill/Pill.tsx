import BasePill from './components/BasePill';

import RoundedPill from './components/RoundedPill';

type HybridButtonType = typeof BasePill & { Rounded: typeof RoundedPill };

const Pill = BasePill as HybridButtonType;
Pill.Rounded = RoundedPill;

export { Pill };
