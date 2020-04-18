import React from "react";
import { shallow } from "enzyme";

import Main from "./index";

let wrapped = shallow(<Main />);

describe("<Main />", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
