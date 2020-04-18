//action types
import { FETCH_FEED_INIT, FETCH_FEED_SUCCESS, FETCH_FEED_FAILURE } from "../types/feed";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FEED_INIT: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case FETCH_FEED_SUCCESS: {
      const { data } = action.payload
      return {
        ...state,
        isFetching: false,
        data,
      };
    }
    case FETCH_FEED_FAILURE: {
      return {
        ...state,
        isFetching: false,
      }
    }
    default:
      return state;
  }
};
