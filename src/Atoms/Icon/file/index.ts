import attachment from './attachment';
import document from './document';
import factSheet from './factSheet';
import image from './image';
import pdf from './pdf';
import print from './print';
import spreadsheet from './spreadsheet';

export default {
  ...attachment,
  ...document,
  ...factSheet,
  ...image,
  ...pdf,
  ...print,
  ...spreadsheet,
};
