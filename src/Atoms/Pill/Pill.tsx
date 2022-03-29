import BasePill from './components/BasePill';

import RoundedPill from './components/RoundedPill';

type HybridPillType = typeof BasePill & { Rounded: typeof RoundedPill };

const Pill = BasePill as HybridPillType;
Pill.Rounded = RoundedPill;

export { Pill };
