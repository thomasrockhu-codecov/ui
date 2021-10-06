import camera from './camera';
import Delete from './delete';
import desktop from './desktop';
import mobile from './mobile';
import modeDark from './modeDark';
import modeLight from './modeLight';
import scanQR from './scanQR';
import tabDefault from './tabDefault';
import userIdFace from './userIdFace';
import userIdTouch from './userIdTouch';

export default {
  ...camera,
  ...Delete,
  ...desktop,
  ...mobile,
  ...modeDark,
  ...modeLight,
  ...scanQR,
  ...tabDefault,
  ...userIdFace,
  ...userIdTouch,
};
