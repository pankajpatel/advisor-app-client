import fetch from 'cross-fetch';

export const FETCH_ADVISOR_BEGIN = 'FETCH_ADVISOR_BEGIN';
export const FETCH_ADVISOR_SUCCESS = 'FETCH_ADVISOR_SUCCESS';
export const FETCH_ADVISOR_FAILURE = 'FETCH_ADVISOR_FAILURE';

export const FETCH_ADVISOR_REVIEWS_BEGIN = 'FETCH_ADVISOR_REVIEWS_BEGIN';
export const FETCH_ADVISOR_REVIEWS_SUCCESS = 'FETCH_ADVISOR_REVIEWS_SUCCESS';
export const FETCH_ADVISOR_REVIEWS_FAILURE = 'FETCH_ADVISOR_REVIEWS_FAILURE';

export const SELECT_ADVISOR = 'SELECT_ADVISOR';

export const selectAdvisor = uuid => {
  return dispatch => {
    dispatch({
      type: SELECT_ADVISOR,
      payload: { uuid },
    });
    dispatch(
      fetchAdvisor({
        uuid,
      }),
    );
  };
};

const getAdvisor = (api, uuid) => {
  const method = 'GET';
  const url = `${api.base}/advisors/${uuid}`;
  return fetch(url, { method })
    .then(handleErrors)
    .then(res => res.json());
};
const getAdvisorReviews = (api, uuid) => {
  const method = 'GET';
  const url = `${api.base}/advisors/${uuid}/reviews`;
  return fetch(url, { method })
    .then(handleErrors)
    .then(res => res.json());
};

export const fetchAdvisor = ({ uuid }) => {
  return (dispatch, getState, { api }) => {
    dispatch(fetchAdvisorBegin());
    return getAdvisor(api, uuid)
      .then(json => {
        dispatch(fetchAdvisorSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAdvisorFailure(error)));
  };
};

export const fetchAdvisorReviews = ({ uuid }) => {
  return (dispatch, getState, { api }) => {
    dispatch(fetchAdvisorReviewsBegin());
    return getAdvisorReviews(api, uuid)
      .then(json => {
        dispatch(fetchAdvisorReviewsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAdvisorReviewsFailure(error)));
  };
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const fetchAdvisorBegin = () => ({
  type: FETCH_ADVISOR_BEGIN,
});

export const fetchAdvisorSuccess = payload => ({
  payload,
  type: FETCH_ADVISOR_SUCCESS,
});

export const fetchAdvisorFailure = error => ({
  type: FETCH_ADVISOR_FAILURE,
  payload: { error },
});

export const fetchAdvisorReviewsBegin = () => ({
  type: FETCH_ADVISOR_REVIEWS_BEGIN,
});

export const fetchAdvisorReviewsSuccess = payload => ({
  payload,
  type: FETCH_ADVISOR_REVIEWS_SUCCESS,
});

export const fetchAdvisorReviewsFailure = error => ({
  type: FETCH_ADVISOR_REVIEWS_FAILURE,
  payload: { error },
});
