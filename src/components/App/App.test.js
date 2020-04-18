import React from "react";
import { shallow } from "enzyme";

import App from "./index";

let wrapped = shallow(<App />);

describe("<App />", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
