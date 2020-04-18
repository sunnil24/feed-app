import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import get from "lodash/get";

//styles
import "./Feed.css";

//component
import FeedRow from "./components/FeedRow";

const Feed = (props) => {
  const {
    className,
    newsFeed,
    onLodeMore,
    hideClickHandler,
    hiddenData,
    upvoteHandler,
    upvotedData,
  } = props;
  const { isFetching } = newsFeed;
  const feeds = get(newsFeed, "data.hits", []);
  const hasFeed = feeds.length;

  if (isFetching) {
    return <p className="no-feed-text">Loading...</p>;
  }
  return (
    <div className={classnames("Feed", className)}>
      {hasFeed ? (
        feeds.map((feed, index) => {
          const { objectID } = feed;
          if (hiddenData.includes(objectID)) {
            return null;
          }
          return (
            <FeedRow
              colored={index % 2 !== 0}
              data={feed}
              key={objectID}
              hideClickHandler={hideClickHandler}
              upvoteHandler={upvoteHandler}
              upvotedData={upvotedData}
            />
          );
        })
      ) : (
        <p className="no-feed-text">No Feed available</p>
      )}

      {hasFeed ? (
        <button
          onClick={onLodeMore}
          className={classnames("primary-text", "pagination", "no-button")}
        >
          More
        </button>
      ) : null}
    </div>
  );
};

Feed.propTypes = {
  className: PropTypes.string,
  onLodeMore: PropTypes.func,
  hideClickHandler: PropTypes.func,
  hiddenData: PropTypes.array,
  upvoteHandler: PropTypes.func,
  upvotedData: PropTypes.array,
};

export default Feed;
