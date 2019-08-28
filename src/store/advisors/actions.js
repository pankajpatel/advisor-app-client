import fetch from 'cross-fetch';

const getAdvisors = api => {
  const method = 'GET';
  return fetch(`${api.base}/advisors`, { method })
    .then(handleErrors)
    .then(res => res.json());
};
export const fetchAdvisors = () => {
  return (dispatch, getState, { api }) => {
    dispatch(fetchAdvisorsBegin());
    return getAdvisors(api)
      .then(json => {
        dispatch(fetchAdvisorsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAdvisorsFailure(error)));
  };
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const FETCH_ADVISORS_BEGIN = 'FETCH_ADVISORS_BEGIN';
export const FETCH_ADVISORS_SUCCESS = 'FETCH_ADVISORS_SUCCESS';
export const FETCH_ADVISORS_FAILURE = 'FETCH_ADVISORS_FAILURE';

export const fetchAdvisorsBegin = () => ({
  type: FETCH_ADVISORS_BEGIN,
});

export const fetchAdvisorsSuccess = advisors => ({
  type: FETCH_ADVISORS_SUCCESS,
  payload: { advisors },
});

export const fetchAdvisorsFailure = error => ({
  type: FETCH_ADVISORS_FAILURE,
  payload: { error },
});
