import {

 FETCH_FEED_SUCCESS,
 FETCH_FEED_FAILURE,
 FETCH_FEED_INIT,
} from '../types/feed'

import axios from 'axios';

export const fetchFeed = (pageNumber) => (dispatch) => {
  dispatch(fetchFeedInit())

  axios
      .get(`http://hn.algolia.com/api/v1/search?tags=story&page=${pageNumber}`,)
      .then(res => {
        dispatch(fetchFeedSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchFeedError(err.message));
      });
};

export const fetchFeedInit = data => ({
  type: FETCH_FEED_INIT,
  payload: {
    data,
  }
});

export const fetchFeedSuccess = data => ({
  type: FETCH_FEED_SUCCESS,
  payload: {
    data,
  }
});

export const fetchFeedError = data => ({
  type: FETCH_FEED_FAILURE,
  payload: {
    data,
  }
});
