// eslint-disable-next-line filenames/match-exported
import { model } from '@modern-js/runtime/model';

const stateModel = model('foo').define(() => {
  return {
    state: {
      banner: [],
      allList: [],
      userID: 'liruiguo',
    },
    actions: {
      setAllList(state, list) {
        state.allList = list;
      },
      setUserId(state, userID) {
        state.userID = userID;
      },
    },
  };
});
export default stateModel;
