import React from "react";
import Navbar from "./Navbar/Navbar";
import Counter from "./Components/Counter/Counter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />

        <Counter />
      </Provider>
    </div>
  );
}

export default App;
