import React from "react";
import { shallow } from "enzyme";

import Router from "./index";

let wrapped = shallow(<Router />);

describe("<Router />", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
