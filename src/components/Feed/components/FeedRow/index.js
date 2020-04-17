import React from "react";
import classnames from "classnames";
import moment from "moment";
import { Link } from "react-router-dom";

//styles
import "./FeedRow.css";

//components
import Main from "../../../Main";
import { getDomainName } from "../../../../utils/common";

const FeedRow = ({ className, colored, data }) => {
  const { title, url, num_comments, points, created_at, author } = data;
  debugger;
  return (
    <div
      className={classnames(
        "feed-row",
        {
          colored: colored,
        },
        className
      )}
    >
      <Main className="feed-wrapper">
        <div className="feed-comment-count dark-text">{num_comments}</div>
        <div className="feed-upvote-count dark-text">{points}</div>
        <div className="feed-upvote-cta">
          <Link onClick={() => {}} className="inherit-text">
            &#9650;
          </Link>
        </div>
        <div className="feed-title">
          <a href={url} className="dark-text">
            {title}
          </a>
          &nbsp; ({getDomainName(url)}) by{" "}
          <span className="dark-text">{author} </span>
          {moment(created_at).fromNow()} [
          <Link onClick={() => {}} className="dark-text">
            hide
          </Link>
          ]
        </div>
      </Main>
    </div>
  );
};

FeedRow.defaultProps = {
  colored: false,
};

export default FeedRow;
