//import action types
import { INCR, DECR } from "./counter.action";
let couterState = {
  counter: 0,
};
let counterReducer = (state = couterState, action) => {
  console.log(action);
  console.log(action.type);
  let { type } = action;
  switch (type) {
    case INCR:
      return { counter: state.counter + 1 };
    case DECR:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
export { counterReducer };
