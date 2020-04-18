import React from "react";
import { shallow } from "enzyme";

import Logo from "./index";

let wrapped = shallow(<Logo />);

describe("<Logo />", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
