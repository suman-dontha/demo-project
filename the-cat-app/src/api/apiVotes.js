import { apiPOST } from './apiHelper';
import { DEFAULT_HEADERS } from './constants';

import {
  upvoteCatPending,
  upvoteCatSuccess,
  upvoteCatError,
  downvoteCatPending,
  downvoteCatSuccess,
  downvoteCatError
} from '../actions';

/* Request to add a vote to a cat */
export const upvoteCat = (id, currentVote = 0) => (dispatch) => {
  const variables = {
    image_id: id,
    value: currentVote === 1 ? 1 : 1, // Ensure the value remains 1 for an upvote
  };

  apiPOST(
    dispatch,
    upvoteCatPending,
    upvoteCatSuccess,
    upvoteCatError,
    'votes',
    variables,
    DEFAULT_HEADERS
  );
};

/* Request to remove a vote from a cat */
export const downvoteCat = (id, currentVote = 0) => (dispatch) => {
  const variables = {
    image_id: id,
    value: currentVote === 1 ? 0 : 0, // Ensure the value becomes 0 and not -1
  };

  apiPOST(
    dispatch,
    downvoteCatPending,
    downvoteCatSuccess,
    downvoteCatError,
    'votes',
    variables,
    DEFAULT_HEADERS
  );
};
