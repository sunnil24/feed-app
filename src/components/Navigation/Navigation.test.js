import React from "react";
import { shallow } from "enzyme";

import Navigation from "./index";

let wrapped = shallow(<Navigation />);

describe("<Navigation />", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
