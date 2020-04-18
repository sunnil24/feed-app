import React from "react";
import { BrowserRouter } from "react-router-dom";

//components
import RouterComponent from "../Router";
import Header from "../Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouterComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;
