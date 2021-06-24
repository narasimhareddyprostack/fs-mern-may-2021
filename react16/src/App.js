import React from "react";
import Navbar from "./Navbar/Navbar";
import Message from "./Message/Message";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Message />
      </Provider>
    </div>
  );
}

export default App;
