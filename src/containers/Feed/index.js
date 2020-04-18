import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqBy from "lodash/uniqBy";

//redux
import { connect } from "react-redux";

//component
import FeedComponent from "../../components/Feed";

//actions
import { fetchFeed } from "../../redux/actions/feed";

export class Feed extends Component {
  state = {
    page: 0,
    hiddenData: [],
    upvotedData: [],
  };
  componentDidMount() {
    this.loadMore();
    this.initLocalData();
  }

  loadMore = () => {
    const { getFeed } = this.props;
    this.setState((preState) => {
      const newPage = preState.page + 1;
      getFeed(newPage);
      return {
        page: newPage,
      };
    });
  };

  initLocalData() {
    if (!localStorage.getItem("hiddenItems")) {
      localStorage.setItem("hiddenItems", "");
      localStorage.setItem("upvotedItems", "");
    }
    this.setState(() => {
      return {
        hiddenData: localStorage.getItem("hiddenItems").split(","),
        upvotedData: localStorage.getItem("upvotedItems").split(","),
      };
    });
  }

  hideClickHandler = (objectID) => {
    const hiddenItems = localStorage.getItem("hiddenItems");

    if (hiddenItems) {
      const newItemsToArray = hiddenItems.split(",");
      const newItems = uniqBy([...newItemsToArray, objectID]);
      localStorage.setItem("hiddenItems", newItems.join());
      this.setState(() => {
        return { hiddenData: newItems };
      });
    } else {
      localStorage.setItem("hiddenItems", [objectID].join());
    }
  };

  upvoteHandler = (objectID) => {
    const upvotedItems = localStorage.getItem("upvotedItems");
    debugger;
    if (upvotedItems) {
      const newItemsToArray = upvotedItems.split(",");
      const newItems = uniqBy([...newItemsToArray, objectID]);
      localStorage.setItem("upvotedItems", newItems.join());
      this.setState(() => {
        return { upvotedData: newItems };
      });
    } else {
      localStorage.setItem("upvotedItems", [objectID].join());
    }
  };

  render() {
    const { hiddenData, upvotedData } = this.state;
    return (
      <FeedComponent
        {...this.props}
        onLodeMore={this.loadMore}
        hideClickHandler={this.hideClickHandler}
        hiddenData={hiddenData}
        upvotedData={upvotedData}
        upvoteHandler={this.upvoteHandler}
      />
    );
  }
}

const mapStateToProps = ({ newsFeed }) => ({
  newsFeed,
});

const mapDispatchToProps = (dispatch) => ({
  getFeed: (pageNumber) => dispatch(fetchFeed(pageNumber)),
});

Feed.propTypes = {
  className: PropTypes.string,
  newsFeed: PropTypes.object,
  getFeed: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
