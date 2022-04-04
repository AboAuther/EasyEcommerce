// eslint-disable-next-line filenames/match-exported
import { model } from '@modern-js/runtime/model';
import axios from 'axios';

const stateModel = model('foo').define(() => {
  return {
    state: {
      banner: [],
    },
  };
});
export default stateModel;
