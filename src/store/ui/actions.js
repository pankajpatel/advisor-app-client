import { filterAdvisors, sortAdvisors } from '../advisors/actions';
export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';

export const triggerFilter = language => {
  return dispatch => {
    dispatch(setFilter({ language }));
    dispatch(
      filterAdvisors({
        language,
      }),
    );
  };
};
export const triggerSort = sort => {
  return dispatch => {
    dispatch(setSort({ sort }));
    dispatch(
      sortAdvisors({
        sort,
      }),
    );
  };
};
export const setFilter = language => ({
  type: SET_FILTER,
  payload: language,
});
export const setSort = sort => ({
  type: SET_SORT,
  payload: sort,
});
