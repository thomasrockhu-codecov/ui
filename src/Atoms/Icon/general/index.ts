import account from './account';
import book from './book';
import lock from './lock';
import profile from './profile';
import security from './security';
import settings from './settings';
import settingsFill from './settingsFill';
import star from './star';
import starFill from './starFill';

export default {
  ...account,
  ...book,
  ...lock,
  ...profile,
  ...security,
  ...settings,
  ...settingsFill,
  ...star,
  ...starFill,
};
