// eslint-disable-next-line filenames/match-exported
import { model } from '@modern-js/runtime/model';

const stateModel = model('foo').define(() => {
  return {
    state: {
      allList: [],
    },
    actions: {
      setAllList(state, list) {
        state.allList = list;
      },
    },
  };
});
export default stateModel;
