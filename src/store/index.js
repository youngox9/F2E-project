import { createStore, combineReducers } from "redux";
// state
const initState = {
  progress: 0,
  isPC: true,
  showLoading: true,
};

// reducer
const global = (state = initState, action) => {
  switch (action.type) {
    case "SET_SCROLL_PROGRESS": {
      return {
        ...state,
        ...action,
      };
    }
    case "SET_SHOW_LOADING": {
      const { showLoading } = action;
      return {
        ...state,
        showLoading,
      };
    }
    default:
      return state;
  }
};

const combine = combineReducers({
  global,
});

const store = createStore(combine);

export default store;
