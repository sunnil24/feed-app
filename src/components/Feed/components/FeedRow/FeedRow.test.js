import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import FeedRow from "./index";

const data = {
  title: "Some title",
  url: "http://some-utl.com",
  num_comments: 222,
  points: 10,
  created_at: 67564652,
  author: "Sunil",
};

const props = {
  data,
  className: "some-class",
  colored: true,
  hideClickHandler: sinon.stub(),
  upvoteHandler: sinon.stub(),
  upvotedData: [],
};

describe("<FeedRow />", () => {
  const wrapped = shallow(<FeedRow {...props} />);

  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
