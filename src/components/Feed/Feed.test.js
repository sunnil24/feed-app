import React from "react";
import { shallow } from "enzyme";

import Feed from "./index";

let wrapped = shallow(<Feed />);

describe("<Feed />", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
