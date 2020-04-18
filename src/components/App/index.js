import React from "react";
import { BrowserRouter } from "react-router-dom";

//components
import RouterComponent from "../Router";
import Header from "../Header";
import MetaData from "../MetaData";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MetaData />
        <Header />
        <RouterComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;
