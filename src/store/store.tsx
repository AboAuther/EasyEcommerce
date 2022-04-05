// eslint-disable-next-line filenames/match-exported
import { model } from '@modern-js/runtime/model';

const stateModel = model('foo').define(() => ({
  state: {
    banner: [],
  },
}));
export default stateModel;
