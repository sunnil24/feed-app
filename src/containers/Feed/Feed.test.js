import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import { Feed } from "./index";

const props = {
  getFeed: sinon.stub(),
};

const wrapped = shallow(<Feed {...props} />);

describe("<Feed />", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
