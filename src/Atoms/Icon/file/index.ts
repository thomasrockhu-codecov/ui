import attachment from './attachment';
import document from './document';
import factSheet from './factSheet';
import image from './image';
import pdf from './pdf';

export default {
  ...attachment,
  ...document,
  ...factSheet,
  ...image,
  ...pdf,
};
