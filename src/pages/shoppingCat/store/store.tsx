/* eslint-disable filenames/match-exported */
import { model } from '@modern-js/runtime/model';

const shopModel = model('foo').define(() => ({
  state: {
    disabled: true,
  },
}));

export default shopModel;
