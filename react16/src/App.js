import React from "react";
import Navbar from "./git-clone/Navbar";

import GitHubSearch from "./git-clone/GitHubSearch";
let App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <GitHubSearch />
    </React.Fragment>
  );
};

export default App;
