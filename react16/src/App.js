import React from "react";
import Navbar from "./Navbar/Navbar";
import Counter from "./Components/Counter/Counter";
import Message from "./Components/Message/Message";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />

        <Counter />
        <Message />
      </Provider>
    </div>
  );
}

export default App;
