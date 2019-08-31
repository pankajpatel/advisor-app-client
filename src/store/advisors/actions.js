import fetch from 'cross-fetch';

export const FETCH_ADVISORS_BEGIN = 'FETCH_ADVISORS_BEGIN';
export const FETCH_ADVISORS_SUCCESS = 'FETCH_ADVISORS_SUCCESS';
export const FETCH_ADVISORS_FAILURE = 'FETCH_ADVISORS_FAILURE';
export const FETCH_ADVISORS_LOAD_MORE = 'FETCH_ADVISORS_LOAD_MORE';
export const APPEND_ADVISORS = 'APPEND_ADVISORS';
export const UPDATE_ADVISORS = 'UPDATE_ADVISORS';
export const FILTER_ADVISORS = 'FILTER_ADVISORS';
export const SORT_ADVISORS = 'SORT_ADVISORS';
export const RESET_FILTER_ADVISORS = 'RESET_FILTER_ADVISORS';
export const RESET_SORT_ADVISORS = 'RESET_SORT_ADVISORS';

export const FILTERS = {
  language(advisors, langKey) {
    return advisors.filter(advisor => advisor.languages.includes(langKey));
  },
};
export const SORTERS = {
  languages: {
    ASC(advisors) {
      return advisors.sort((a, b) => a.languages.length - b.languages.length);
    },
    DESC(advisors) {
      return advisors.sort((a, b) => b.languages.length - a.languages.length);
    },
  },
  reviewsCount: {
    ASC(advisors) {
      return advisors.sort((a, b) => a.reviewsCount - b.reviewsCount);
    },
    DESC(advisors) {
      return advisors.sort((a, b) => b.reviewsCount - a.reviewsCount);
    },
  },
  'ratings.average': {
    ASC(advisors) {
      return advisors.sort((a, b) => a.ratings.average - b.ratings.average);
    },
    DESC(advisors) {
      return advisors.sort((a, b) => b.ratings.average - a.ratings.average);
    },
  },
};

const getAdvisors = (api, limit = 20, offset = 0) => {
  const method = 'GET';
  const url = `${api.base}/advisors?limit=${limit}&offset=${offset}`;
  return fetch(url, { method })
    .then(handleErrors)
    .then(res => res.json());
};

export const fetchAdvisors = (resultsAction = fetchAdvisorsSuccess) => {
  return (dispatch, getState, { api }) => {
    const {
      advisors: { page },
    } = getState();
    const limit = api.limit;
    const offset = (+page - 1) * api.limit;
    dispatch(fetchAdvisorsBegin());
    return getAdvisors(api, limit, offset)
      .then(json => {
        dispatch(resultsAction(json));
        return json;
      })
      .catch(error => dispatch(fetchAdvisorsFailure(error)));
  };
};

export const loadMoreAdvisors = () => {
  return (dispatch, getState, { api }) => {
    dispatch(fetchAdvisorsLoadMore()); // increment page
    return fetchAdvisors(appendAdvisors)(dispatch, getState, { api });
  };
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const fetchAdvisorsLoadMore = page => ({
  type: FETCH_ADVISORS_LOAD_MORE,
  payload: { page },
});

export const fetchAdvisorsBegin = () => ({
  type: FETCH_ADVISORS_BEGIN,
});

export const fetchAdvisorsSuccess = json => ({
  type: FETCH_ADVISORS_SUCCESS,
  payload: json,
});

export const fetchAdvisorsFailure = error => ({
  type: FETCH_ADVISORS_FAILURE,
  payload: { error },
});

export const updateAdvisors = advisors => ({
  type: UPDATE_ADVISORS,
  payload: { advisors },
});

export const appendAdvisors = payload => ({
  payload,
  type: APPEND_ADVISORS,
});

export const resetSortAdvisors = payload => ({
  payload,
  type: RESET_SORT_ADVISORS,
});

export const resetFilterAdvisors = resetSortAdvisors;

export const filterAdvisors = filters => {
  return (dispatch, getState) => {
    dispatch({ type: FILTER_ADVISORS, payload: { filters } });

    const state = getState();

    const filterKeys = Object.keys(filters); // Applied Filter types array

    const advisors = filterKeys.reduce((advisors, filter) => {
      return FILTERS[filter](advisors, filters[filter]);
    }, state.advisors.advisors);
    dispatch(updateAdvisors(advisors));
  };
};

export const sortAdvisors = sort => {
  return (dispatch, getState, { sorters }) => {
    dispatch({ type: SORT_ADVISORS, payload: sort });

    const state = getState();

    const { by, order } = sorters[sort.sort];
    const advisors = []
    if (by && order) {
      advisors.concat(SORTERS[by][order](state.advisors.advisors));
    } else {
      advisors.concat(state.advisors.advisors)
    }
    dispatch(resetSortAdvisors({
      advisors,
      hasMore: state.advisors.hasMore,
    }));
  };
};
