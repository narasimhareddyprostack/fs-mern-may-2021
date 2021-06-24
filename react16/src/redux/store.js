import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
let store = createStore({ message: "Hello" }, composeWithDevTools());
export { store };
