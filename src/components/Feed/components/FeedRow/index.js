import React from "react";
import classnames from "classnames";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//styles
import "./FeedRow.css";

//components
import Main from "../../../Main";
import { getDomainName } from "../../../../utils/common";

const FeedRow = (props) => {
  const {
    className,
    colored,
    data,
    hideClickHandler,
    upvoteHandler,
    upvotedData,
  } = props;
  const {
    title,
    url,
    num_comments,
    points,
    created_at,
    author,
    objectID,
  } = data;
  const domain = getDomainName(url);

  const hideMe = (e) => {
    e.preventDefault();
    hideClickHandler(objectID);
  };

  const upvoteMe = (e) => {
    e.preventDefault();
    upvoteHandler(objectID);
  };

  let domainText = "";
  if (domain) {
    domainText = `(${domain})`;
  }

  const hasBeenUpvoted = upvotedData.includes(objectID);

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
          <button
            onClick={upvoteMe}
            className={classnames("no-button", "inherit-text", {
              "primary-text": hasBeenUpvoted,
            })}
          >
            &#9650;
          </button>
        </div>
        <div className="feed-title">
          <a href={url} className="dark-text">
            {title}
          </a>
          &nbsp; {domainText} by &nbsp;
          <span className="dark-text">{author} </span>
          {moment(created_at).fromNow()} [
          <button onClick={hideMe} className="no-button dark-text">
            hide
          </button>
          ]
        </div>
      </Main>
    </div>
  );
};

FeedRow.propTypes = {
  className: PropTypes.string,
  colored: PropTypes.bool,
  data: PropTypes.object,
  hideClickHandler: PropTypes.func,
  upvoteHandler: PropTypes.func,
};

FeedRow.defaultProps = {
  colored: false,
};

export default FeedRow;
