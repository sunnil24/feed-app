import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

//styles
import "./Feed.css";

//data
import feeds from "../../data/feed";
import FeedRow from "./components/FeedRow";

function Feed() {
  return (
    <div className="Feed">
      {feeds.hits.map((feed, index) => {
        const { objectID } = feed;
        return <FeedRow colored={index % 2 !== 0} data={feed} key={objectID} />;
      })}

      <Link
        onClick={() => {}}
        className={classnames("primary-text", "pagination")}
      >
        More
      </Link>
    </div>
  );
}

export default Feed;
