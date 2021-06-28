//how to combine Redux Reducer?
import { combineReducers } from "redux";
import { counterReducer, counterKey } from "./Counter/counter.reducer";
import { messageReducer } from "./Message/message.reducer";
let rootReducer = combineReducers({
  [counterKey]: counterReducer,
  message: messageReducer,
});
export { rootReducer };
