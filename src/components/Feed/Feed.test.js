import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import Feed from "./index";

const props = {
  className: "some-class",
  newsFeed: {
    isFetching: true,
    data: {
      hits: [
        {
          title: "Some title",
          url: "http://some-utl.com",
          num_comments: 222,
          points: 10,
          created_at: 67564652,
          author: "Sunil",
        },
      ],
    },
  },
  onLodeMore: sinon.stub(),
  hideClickHandler: sinon.stub(),
  hiddenData: [],
  upvoteHandler: sinon.stub(),
  upvotedData: [],
};

const wrapped = shallow(<Feed {...props} />);

describe("<Feed {...props} />", () => {
  it("should render the Title Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
