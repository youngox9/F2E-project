import { createStore, combineReducers } from "redux";
// state
const initState = {
  progress: 0,
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
    case "SET_KV_PROGRESS": {
      const { progress, event } = action;
      return {
        ...state,
        progress,
        event,
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
